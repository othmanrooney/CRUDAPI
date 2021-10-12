using CRUDAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRUDAPI.Controllers
{
    public class EmployeeController : ApiController
    {
        DataAccess context = new DataAccess();
        [HttpGet]
        [Route("api/employee/GetAllEmployee")]
        public IEnumerable<Employee> GetAllEmployee()
        {
            var data = context.Employees.ToList().OrderBy(x => x.FirstName);
            var result = data.Select(x => new Employee()
            {
                Id=x.Id,
                FirstName=x.FirstName,
                LastName=x.LastName
                
            });
            return result.ToList();
        }
        [HttpGet]
        //[Route("api/employee/GetEmployee/{id}")]
        public Employee GetEmployee(int id)
        {
            var data = context.Employees.Where(x => x.Id == id).FirstOrDefault();
            if (data != null)
            {
                Employee employee = new Employee();
                employee.Id = data.Id;
                employee.FirstName = data.FirstName;
                employee.LastName = data.LastName;
                return employee;
            }
            else throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
        }
        [HttpPost]
        [Route("api/employee/AddEmployee")]
        public HttpResponseMessage AddEmployee(Employee employee)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    Employee emp = new Employee();
                    emp.FirstName = employee.FirstName;
                    emp.LastName = employee.LastName;
                    context.Employees.Add(emp);
                    var result = context.SaveChanges();
                    if (result > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.Created, "Submitted Successfully");
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Something wrong !");
                    }
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Something wrong !");
                }
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Something wrong !", ex);
            }

        }
        [HttpPost]
        [Route("api/employee/UpdateEmployee")]
        public HttpResponseMessage UpdateEmployee (Employee employee)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    Employee emp = new Employee();
                    emp.Id = employee.Id;
                    emp.FirstName = employee.FirstName;
                    emp.LastName = employee.LastName;
                    context.Entry(emp).State = System.Data.Entity.EntityState.Modified;
                    var result = context.SaveChanges();
                    if (result > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, "Updated Successfully");
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Something wrong !");
                    }
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Something wrong !");
                }
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Something wrong !", ex);
            }
        }
        [HttpPost]
        [Route("api/employee/DeleteEmployee/{Id}")]
        public HttpResponseMessage DeleteEmployee(int Id)
        {
            Employee emp = new Employee();
            emp = context.Employees.Find(Id);
            if (emp != null)
            {
                context.Employees.Remove(emp);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, emp);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Something wrong !");
            }
        }


    }
}