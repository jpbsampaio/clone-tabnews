function status(request, response) {
  response.status(200).json({ status: 'API está funcionando' });
}

export default status;