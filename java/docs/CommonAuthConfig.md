

# CommonAuthConfig

AuthConfig downloads logs; needs actions:read on the scoped repos.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**githubApp** | [**CommonGitHubAppVariant**](CommonGitHubAppVariant.md) |  |  [optional] |
|**personalAccessToken** | [**CommonPersonalAccessTokenVariant**](CommonPersonalAccessTokenVariant.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PERSONAL_ACCESS_TOKEN | &quot;personal_access_token&quot; |
| GITHUB_APP | &quot;github_app&quot; |



