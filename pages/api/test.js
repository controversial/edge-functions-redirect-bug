export default function handler(req) {
  return new Response(null, {
    status: 301,
    headers: {
      Location: 'https://example.com/',
      'x-location': 'https://example.com/',
    },
  });
}

export const config = {
  runtime: 'experimental-edge',
};
