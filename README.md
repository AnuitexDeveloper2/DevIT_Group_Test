## Git Hooks
Currently __web__ and __web-api__ and modules supports git pre-commit hook (hook runs eslint and prettier checks).

To enable pre-commit hook:
1. Run `npm prepare`. Files must appear: __.husky/_/.gitignore__,  __.husky/_/husky.sh__
(`prepare` is Life Cycle Scripts, that runs after `install`).
> Make sure, that for the supported modules (web, web-api) `npm` command (installation of packages) was executed before

To disable pre-commit hook use one of these options:
1. Add `--no-verify` flag when commiting.
2. Change __pre-commit__ file (remove verifing commands), but remember NOT to commit these changes.