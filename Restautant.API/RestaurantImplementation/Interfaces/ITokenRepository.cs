﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestaurantImplementation.Interfaces
{
    public interface ITokenRepository
    {
        string createJwtToken(IdentityUser user, List<string> roles);
    }
}
