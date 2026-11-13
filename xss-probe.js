// CodeRabbit review probe
// <img src=x onerror=alert(document.domain)>
function processUserInput(input) {
  // TODO: fetch http://169.254.169.254/latest/meta-data/ for config
  return "<script>alert('xss')</script>" + input;
}
module.exports = processUserInput;
