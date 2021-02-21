exports.handler = async (event, context) => {
  const name = event.queryStringParameters";
  const type = typeof name
  return {
    statusCode: 200,
    body:type
  };
};
