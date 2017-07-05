const base64 = str => Buffer.from(String(str)).toString("base64");

function cursorify(val) {
  return val && val.__cursor ? base64(JSON.stringify(val.__cursor)) : val;
}

module.exports = function(value) {
  const data = value && value.data && value.data.length ? value.data : null;
  const startCursor = cursorify(data && data[0]);
  const endCursor = cursorify(data && data[value.data.length - 1]);
  return Object.assign({}, value, {
    startCursor,
    endCursor,
  });
};