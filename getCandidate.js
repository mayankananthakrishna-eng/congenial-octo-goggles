exports.handler = async (event) => {

  const { id } = JSON.parse(event.body);

  const candidates = {
    1: {
      name: "Candidate 1",
      info: "Full information about Candidate 1."
    },
    2: {
      name: "Candidate 2",
      info: "Full information about Candidate 2."
    },
    3: {
      name: "Candidate 3",
      info: "Full information about Candidate 3."
    }
  };

  if (!candidates[id]) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Candidate not found" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(candidates[id])
  };
};