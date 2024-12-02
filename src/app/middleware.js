export async function middleware(req) {
    const url = req.nextUrl.clone();
    
    // Redirect from the root (/) to /blogs/new
    if (url.pathname === '/') {
      url.pathname = '/blogs/new';
      return Response.redirect(url);
    }
  
    return Response.next();
  }