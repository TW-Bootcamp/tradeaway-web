const config = {
  "production":"http://ec2-35-161-91-205.us-west-2.compute.amazonaws.com/",
  "development":"http://localhost:3000"
}

const baseUrl= config[process.env.NODE_ENV]+'/api';

const endpoints= {
      auth:`${baseUrl}/auth`,
      register:`${baseUrl}/users/register`
};

export default endpoints;