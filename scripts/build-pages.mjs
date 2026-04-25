import { execSync } from 'node:child_process'
import process from 'node:process'

const overrideBase = process.env.BASE_PATH
const repo = process.env.GITHUB_REPOSITORY
const base = overrideBase ?? (repo ? `/${repo.split('/')[1]}/` : '/')

execSync(`npx --yes slidev build --base ${base}`, { stdio: 'inherit' })
