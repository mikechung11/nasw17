using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace nasw17.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult SAResources()
        {
            ViewBag.Message = "Sexual Assault Resources.";

            return View();
        }

        public ActionResult SuiResource()
        {
            ViewBag.Message = "Suicide Prevention Resources.";

            return View();
        }

        public ActionResult DVResource()
        {
            ViewBag.Message = "Domestic Violence Resources.";

            return View();
        }

        public ActionResult SAPage()
        {
            ViewBag.Message = "Sexual Assault Page";

            return View();
        }
        public ActionResult Report()
        {
            ViewBag.Message = "Report";

            return View();
        }
    }
}