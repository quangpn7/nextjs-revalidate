const getTime = async () => {
  try {
    const response = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Bangkok",
      {
        next: {
          tags: ["tagTime"],
        },
      }
    );

    return response.json();
  } catch (error) {
    return {};
  }
};

export { getTime };
