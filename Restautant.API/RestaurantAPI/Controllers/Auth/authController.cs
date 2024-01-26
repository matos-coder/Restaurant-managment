using DevDefined.OAuth.Storage.Basic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RestaurantImplementation.DTOs.LoginRequestDto;
using RestaurantImplementation.DTOs.RegisterRequestDto;
using RestaurantImplementation.Interfaces;

namespace RestaurantAPI.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class authController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly ITokenRepository tokenRepository;
        public authController(UserManager<IdentityUser> userManager, ITokenRepository tokenRepository)
        {
            this.userManager = userManager;
            this.tokenRepository = tokenRepository;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            var IdentityUser = new IdentityUser
            {
                UserName = registerDto.Username,
                Email = registerDto.Username
            };
            var identityResult = await userManager.CreateAsync(IdentityUser, registerDto.Password);
            if (identityResult.Succeeded)
            {
                if (registerDto.roles != null && registerDto.roles.Any())
                {
                    identityResult = await userManager.AddToRolesAsync(IdentityUser, registerDto.roles);
                    if (identityResult.Succeeded)
                    {
                        return Ok("register succesfull");
                    }
                }
            }
            return BadRequest("something went wrong");
        }
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await userManager.FindByNameAsync(loginDto.Username);
            if (user != null)
            {
                var checkPassResult = await userManager.CheckPasswordAsync(user, loginDto.Password);
                if (checkPassResult)
                {
                    var roles = await userManager.GetRolesAsync(user);
                    if (roles != null)
                    {
                        var JwtToken = tokenRepository.createJwtToken(user, roles.ToList());
                        var response = new LoginResponseDto
                        {
                            JwtToken = JwtToken,
                        };
                        return Ok(response);
                    }
                }
            }
            return BadRequest();
        }
    }
}
