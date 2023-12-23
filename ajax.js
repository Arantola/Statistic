console.log("OK");
const button = document.getElementById("button");
const URL =
  "https://gipsy-partners.com/api/sys/analytics.json-pretty?id=1-c89b95bac18d8810ea68d56a32db1aca&item=comp&user=90&from=2023-11-01&to=2023-12-01&phase=3";

async function getData(url) {
  try {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type",
    };

    const response = await axios.get(url, { headers });
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

button.addEventListener("click", async () => {
  // const response = await getData("server.php?currency=now");
  const response = await getData(URL);
  console.log(response);
});
