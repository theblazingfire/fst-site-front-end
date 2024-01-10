# **Workflows**

For this project we have the following workflows :

- **Code Quality** : Code quality ensures that the codebase conforms to certain coding standards and other custom standards defined in tests and other configurations

To ensure that the code is readable and conforms to standard, every commit is subject to

- Linting
- Build
- Testing

code quailty workflow is applied to the folowing branches : [main, experimental] for the following events : [push, pull_request]

Jobs - CodeAccessment

- **Deployment** : Deployment takes care of releasing / triggering deploy actions of production code to the hosting services.

Hosting used is netlify for the dev-preview-phase. Netlify auto deploys the main branch
deployment workflow is applied to the folowing branches : [main] for the following events : [push]

- **tagging-releases** : tagging releases takes care of versioning for our repository, that way we can track production changes (main branch) to our repository, making rollbacks possible.

tagging_release workflow is applied to the folowing branches : [main] for the following events : [push]

## **Commit Structure**

The two main branches are the

- (main) Branch
- (experimental) Branch

--> **The Main Branch** : Ideally, only allows for code to be merged from the experimental branch, reason being that the main branch is deployed. This ensures safty that our production code will be bug free and in the event that a bug makes it to production, then we can roll back to the previous stable release of the repo.

--> **The Experimental Branch** : The experimental branch where all other branches where we work on new features happen before. That way all inspections and validations can be done before then passing those updates to the main branch.

**Standards to be followed for each section of the projects are defined below.**
