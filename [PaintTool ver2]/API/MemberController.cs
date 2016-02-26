using _PaintTool_ver2_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace _PaintTool_ver2_.API
{
    //[Authorize]

    public class MemberController : ApiController
    {

        private ApplicationDbContext _db = new ApplicationDbContext();

        public IHttpActionResult Get()
        {
            return Ok(_db.Members.ToList());

        }

        public IHttpActionResult Get(int id)
        {
            return Ok(_db.Members.Where(m => m.Id == id).FirstOrDefault());
        }
    }
}
