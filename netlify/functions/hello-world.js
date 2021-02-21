exports.handler = async (event, context) => {
  const name = event.queryStringParameters;

  return {
    statusCode: 200,
    body: name
  };
};
