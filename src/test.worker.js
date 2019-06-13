self.addEventListener("message", startCounter);

console.log("worker");
function startCounter(event) {
  console.log(event.data, self);
  let initial = event.data;
  setInterval(() => this.postMessage(initial++), 1000);
}
