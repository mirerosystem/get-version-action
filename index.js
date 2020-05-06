const core = require('@actions/core')
const github = require('@actions/github')

try {
  const version = github.context.ref.replace('refs/tags/v', '')

  core.setOutput('version', version)
} catch (error) {
  core.setFailed(error.message);
}
