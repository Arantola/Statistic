// netlify/functions/proxy.js
import fetch from "node-fetch";

const URL =
  "https://gipsy-partners.com/api/sys/analytics.json-pretty?id=1-c89b95bac18d8810ea68d56a32db1aca&item=comp&user=81&phase=3&from=2023-11-01&to=2023-12-01";
exports.handler = async function (event, context) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
