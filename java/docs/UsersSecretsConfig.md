

# UsersSecretsConfig

Google Workspace Users secrets

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**credentialsJson** | **String** | JSON credentials to authenticate with Google Cloud. |  [optional] |
|**customerId** | **String** | Google Workspace Customer ID. If you use your google workspace customer ID you will pull data on all users in all domains of your Google Workspace account. This should be set if Domain is not set. |  [optional] |
|**domain** | **String** | Domain name your users belong to. If you use a google workspace domain you will only pull user data for users that belong to that domain. This should be set if CustomerID is not set |  [optional] |



