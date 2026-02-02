// Supabase edge function - no-op handler
// Returns 200 OK to prevent deployment errors

export default async function handler(req: Request) {
  // This function intentionally does nothing
  // The app is client-side only and doesn't need edge functions
  
  return new Response(
    JSON.stringify({ 
      status: 'ok',
      message: 'Client-side app - no server functionality required'
    }),
    { 
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}