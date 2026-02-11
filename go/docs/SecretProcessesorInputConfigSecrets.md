# SecretProcessesorInputConfigSecrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**IntegrationKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**SecretKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ClientId** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClientSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**AuthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**CredentialsJson** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**OauthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PersonalAccessToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**TenantId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ApplicationKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ApplicationKeyId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**EnterpriseId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Username** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PersonalAuthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ApiToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AccessToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AwsAccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AwsSecretKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**RsaPrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ApiSecret** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**HarvestApiKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**GithubAppPrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**RefreshToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**UserOauthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Token** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**TwilioAccountSid** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**TwilioAuthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**CustomerId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Domain** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewSecretProcessesorInputConfigSecrets

`func NewSecretProcessesorInputConfigSecrets(clientId ModelsSecret, clientSecret ModelsSecret, ) *SecretProcessesorInputConfigSecrets`

NewSecretProcessesorInputConfigSecrets instantiates a new SecretProcessesorInputConfigSecrets object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretProcessesorInputConfigSecretsWithDefaults

`func NewSecretProcessesorInputConfigSecretsWithDefaults() *SecretProcessesorInputConfigSecrets`

NewSecretProcessesorInputConfigSecretsWithDefaults instantiates a new SecretProcessesorInputConfigSecrets object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *SecretProcessesorInputConfigSecrets) GetApiKey() ModelsSecret`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetApiKeyOk() (*ModelsSecret, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *SecretProcessesorInputConfigSecrets) SetApiKey(v ModelsSecret)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *SecretProcessesorInputConfigSecrets) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetIntegrationKey

`func (o *SecretProcessesorInputConfigSecrets) GetIntegrationKey() ModelsSecret`

GetIntegrationKey returns the IntegrationKey field if non-nil, zero value otherwise.

### GetIntegrationKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetIntegrationKeyOk() (*ModelsSecret, bool)`

GetIntegrationKeyOk returns a tuple with the IntegrationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationKey

`func (o *SecretProcessesorInputConfigSecrets) SetIntegrationKey(v ModelsSecret)`

SetIntegrationKey sets IntegrationKey field to given value.

### HasIntegrationKey

`func (o *SecretProcessesorInputConfigSecrets) HasIntegrationKey() bool`

HasIntegrationKey returns a boolean if a field has been set.

### GetSecretKey

`func (o *SecretProcessesorInputConfigSecrets) GetSecretKey() ModelsSecret`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetSecretKeyOk() (*ModelsSecret, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *SecretProcessesorInputConfigSecrets) SetSecretKey(v ModelsSecret)`

SetSecretKey sets SecretKey field to given value.

### HasSecretKey

`func (o *SecretProcessesorInputConfigSecrets) HasSecretKey() bool`

HasSecretKey returns a boolean if a field has been set.

### GetClientId

`func (o *SecretProcessesorInputConfigSecrets) GetClientId() ModelsSecret`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SecretProcessesorInputConfigSecrets) GetClientIdOk() (*ModelsSecret, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SecretProcessesorInputConfigSecrets) SetClientId(v ModelsSecret)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *SecretProcessesorInputConfigSecrets) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *SecretProcessesorInputConfigSecrets) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *SecretProcessesorInputConfigSecrets) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.


### GetAuthToken

`func (o *SecretProcessesorInputConfigSecrets) GetAuthToken() ModelsSecret`

GetAuthToken returns the AuthToken field if non-nil, zero value otherwise.

### GetAuthTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetAuthTokenOk() (*ModelsSecret, bool)`

GetAuthTokenOk returns a tuple with the AuthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthToken

`func (o *SecretProcessesorInputConfigSecrets) SetAuthToken(v ModelsSecret)`

SetAuthToken sets AuthToken field to given value.

### HasAuthToken

`func (o *SecretProcessesorInputConfigSecrets) HasAuthToken() bool`

HasAuthToken returns a boolean if a field has been set.

### GetCredentialsJson

`func (o *SecretProcessesorInputConfigSecrets) GetCredentialsJson() ModelsSecret`

GetCredentialsJson returns the CredentialsJson field if non-nil, zero value otherwise.

### GetCredentialsJsonOk

`func (o *SecretProcessesorInputConfigSecrets) GetCredentialsJsonOk() (*ModelsSecret, bool)`

GetCredentialsJsonOk returns a tuple with the CredentialsJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsJson

`func (o *SecretProcessesorInputConfigSecrets) SetCredentialsJson(v ModelsSecret)`

SetCredentialsJson sets CredentialsJson field to given value.

### HasCredentialsJson

`func (o *SecretProcessesorInputConfigSecrets) HasCredentialsJson() bool`

HasCredentialsJson returns a boolean if a field has been set.

### GetOauthToken

`func (o *SecretProcessesorInputConfigSecrets) GetOauthToken() ModelsSecret`

GetOauthToken returns the OauthToken field if non-nil, zero value otherwise.

### GetOauthTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetOauthTokenOk() (*ModelsSecret, bool)`

GetOauthTokenOk returns a tuple with the OauthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauthToken

`func (o *SecretProcessesorInputConfigSecrets) SetOauthToken(v ModelsSecret)`

SetOauthToken sets OauthToken field to given value.

### HasOauthToken

`func (o *SecretProcessesorInputConfigSecrets) HasOauthToken() bool`

HasOauthToken returns a boolean if a field has been set.

### GetPersonalAccessToken

`func (o *SecretProcessesorInputConfigSecrets) GetPersonalAccessToken() ModelsSecret`

GetPersonalAccessToken returns the PersonalAccessToken field if non-nil, zero value otherwise.

### GetPersonalAccessTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetPersonalAccessTokenOk() (*ModelsSecret, bool)`

GetPersonalAccessTokenOk returns a tuple with the PersonalAccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalAccessToken

`func (o *SecretProcessesorInputConfigSecrets) SetPersonalAccessToken(v ModelsSecret)`

SetPersonalAccessToken sets PersonalAccessToken field to given value.

### HasPersonalAccessToken

`func (o *SecretProcessesorInputConfigSecrets) HasPersonalAccessToken() bool`

HasPersonalAccessToken returns a boolean if a field has been set.

### GetAccessKey

`func (o *SecretProcessesorInputConfigSecrets) GetAccessKey() ModelsSecret`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetAccessKeyOk() (*ModelsSecret, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *SecretProcessesorInputConfigSecrets) SetAccessKey(v ModelsSecret)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *SecretProcessesorInputConfigSecrets) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetTenantId

`func (o *SecretProcessesorInputConfigSecrets) GetTenantId() ModelsSecret`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *SecretProcessesorInputConfigSecrets) GetTenantIdOk() (*ModelsSecret, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *SecretProcessesorInputConfigSecrets) SetTenantId(v ModelsSecret)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *SecretProcessesorInputConfigSecrets) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetApplicationKey

`func (o *SecretProcessesorInputConfigSecrets) GetApplicationKey() ModelsSecret`

GetApplicationKey returns the ApplicationKey field if non-nil, zero value otherwise.

### GetApplicationKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetApplicationKeyOk() (*ModelsSecret, bool)`

GetApplicationKeyOk returns a tuple with the ApplicationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationKey

`func (o *SecretProcessesorInputConfigSecrets) SetApplicationKey(v ModelsSecret)`

SetApplicationKey sets ApplicationKey field to given value.

### HasApplicationKey

`func (o *SecretProcessesorInputConfigSecrets) HasApplicationKey() bool`

HasApplicationKey returns a boolean if a field has been set.

### GetApplicationKeyId

`func (o *SecretProcessesorInputConfigSecrets) GetApplicationKeyId() ModelsSecret`

GetApplicationKeyId returns the ApplicationKeyId field if non-nil, zero value otherwise.

### GetApplicationKeyIdOk

`func (o *SecretProcessesorInputConfigSecrets) GetApplicationKeyIdOk() (*ModelsSecret, bool)`

GetApplicationKeyIdOk returns a tuple with the ApplicationKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationKeyId

`func (o *SecretProcessesorInputConfigSecrets) SetApplicationKeyId(v ModelsSecret)`

SetApplicationKeyId sets ApplicationKeyId field to given value.

### HasApplicationKeyId

`func (o *SecretProcessesorInputConfigSecrets) HasApplicationKeyId() bool`

HasApplicationKeyId returns a boolean if a field has been set.

### GetEnterpriseId

`func (o *SecretProcessesorInputConfigSecrets) GetEnterpriseId() ModelsSecret`

GetEnterpriseId returns the EnterpriseId field if non-nil, zero value otherwise.

### GetEnterpriseIdOk

`func (o *SecretProcessesorInputConfigSecrets) GetEnterpriseIdOk() (*ModelsSecret, bool)`

GetEnterpriseIdOk returns a tuple with the EnterpriseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnterpriseId

`func (o *SecretProcessesorInputConfigSecrets) SetEnterpriseId(v ModelsSecret)`

SetEnterpriseId sets EnterpriseId field to given value.

### HasEnterpriseId

`func (o *SecretProcessesorInputConfigSecrets) HasEnterpriseId() bool`

HasEnterpriseId returns a boolean if a field has been set.

### GetPassword

`func (o *SecretProcessesorInputConfigSecrets) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *SecretProcessesorInputConfigSecrets) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *SecretProcessesorInputConfigSecrets) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *SecretProcessesorInputConfigSecrets) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetUsername

`func (o *SecretProcessesorInputConfigSecrets) GetUsername() ModelsSecret`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *SecretProcessesorInputConfigSecrets) GetUsernameOk() (*ModelsSecret, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *SecretProcessesorInputConfigSecrets) SetUsername(v ModelsSecret)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *SecretProcessesorInputConfigSecrets) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetPersonalAuthToken

`func (o *SecretProcessesorInputConfigSecrets) GetPersonalAuthToken() ModelsSecret`

GetPersonalAuthToken returns the PersonalAuthToken field if non-nil, zero value otherwise.

### GetPersonalAuthTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetPersonalAuthTokenOk() (*ModelsSecret, bool)`

GetPersonalAuthTokenOk returns a tuple with the PersonalAuthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalAuthToken

`func (o *SecretProcessesorInputConfigSecrets) SetPersonalAuthToken(v ModelsSecret)`

SetPersonalAuthToken sets PersonalAuthToken field to given value.

### HasPersonalAuthToken

`func (o *SecretProcessesorInputConfigSecrets) HasPersonalAuthToken() bool`

HasPersonalAuthToken returns a boolean if a field has been set.

### GetApiToken

`func (o *SecretProcessesorInputConfigSecrets) GetApiToken() ModelsSecret`

GetApiToken returns the ApiToken field if non-nil, zero value otherwise.

### GetApiTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetApiTokenOk() (*ModelsSecret, bool)`

GetApiTokenOk returns a tuple with the ApiToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiToken

`func (o *SecretProcessesorInputConfigSecrets) SetApiToken(v ModelsSecret)`

SetApiToken sets ApiToken field to given value.

### HasApiToken

`func (o *SecretProcessesorInputConfigSecrets) HasApiToken() bool`

HasApiToken returns a boolean if a field has been set.

### GetAccessToken

`func (o *SecretProcessesorInputConfigSecrets) GetAccessToken() ModelsSecret`

GetAccessToken returns the AccessToken field if non-nil, zero value otherwise.

### GetAccessTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetAccessTokenOk() (*ModelsSecret, bool)`

GetAccessTokenOk returns a tuple with the AccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessToken

`func (o *SecretProcessesorInputConfigSecrets) SetAccessToken(v ModelsSecret)`

SetAccessToken sets AccessToken field to given value.

### HasAccessToken

`func (o *SecretProcessesorInputConfigSecrets) HasAccessToken() bool`

HasAccessToken returns a boolean if a field has been set.

### GetAwsAccessKey

`func (o *SecretProcessesorInputConfigSecrets) GetAwsAccessKey() ModelsSecret`

GetAwsAccessKey returns the AwsAccessKey field if non-nil, zero value otherwise.

### GetAwsAccessKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetAwsAccessKeyOk() (*ModelsSecret, bool)`

GetAwsAccessKeyOk returns a tuple with the AwsAccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccessKey

`func (o *SecretProcessesorInputConfigSecrets) SetAwsAccessKey(v ModelsSecret)`

SetAwsAccessKey sets AwsAccessKey field to given value.

### HasAwsAccessKey

`func (o *SecretProcessesorInputConfigSecrets) HasAwsAccessKey() bool`

HasAwsAccessKey returns a boolean if a field has been set.

### GetAwsSecretKey

`func (o *SecretProcessesorInputConfigSecrets) GetAwsSecretKey() ModelsSecret`

GetAwsSecretKey returns the AwsSecretKey field if non-nil, zero value otherwise.

### GetAwsSecretKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetAwsSecretKeyOk() (*ModelsSecret, bool)`

GetAwsSecretKeyOk returns a tuple with the AwsSecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsSecretKey

`func (o *SecretProcessesorInputConfigSecrets) SetAwsSecretKey(v ModelsSecret)`

SetAwsSecretKey sets AwsSecretKey field to given value.

### HasAwsSecretKey

`func (o *SecretProcessesorInputConfigSecrets) HasAwsSecretKey() bool`

HasAwsSecretKey returns a boolean if a field has been set.

### GetRsaPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) GetRsaPrivateKey() ModelsSecret`

GetRsaPrivateKey returns the RsaPrivateKey field if non-nil, zero value otherwise.

### GetRsaPrivateKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetRsaPrivateKeyOk() (*ModelsSecret, bool)`

GetRsaPrivateKeyOk returns a tuple with the RsaPrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRsaPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) SetRsaPrivateKey(v ModelsSecret)`

SetRsaPrivateKey sets RsaPrivateKey field to given value.

### HasRsaPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) HasRsaPrivateKey() bool`

HasRsaPrivateKey returns a boolean if a field has been set.

### GetApiSecret

`func (o *SecretProcessesorInputConfigSecrets) GetApiSecret() ModelsSecret`

GetApiSecret returns the ApiSecret field if non-nil, zero value otherwise.

### GetApiSecretOk

`func (o *SecretProcessesorInputConfigSecrets) GetApiSecretOk() (*ModelsSecret, bool)`

GetApiSecretOk returns a tuple with the ApiSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiSecret

`func (o *SecretProcessesorInputConfigSecrets) SetApiSecret(v ModelsSecret)`

SetApiSecret sets ApiSecret field to given value.

### HasApiSecret

`func (o *SecretProcessesorInputConfigSecrets) HasApiSecret() bool`

HasApiSecret returns a boolean if a field has been set.

### GetHarvestApiKey

`func (o *SecretProcessesorInputConfigSecrets) GetHarvestApiKey() ModelsSecret`

GetHarvestApiKey returns the HarvestApiKey field if non-nil, zero value otherwise.

### GetHarvestApiKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetHarvestApiKeyOk() (*ModelsSecret, bool)`

GetHarvestApiKeyOk returns a tuple with the HarvestApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHarvestApiKey

`func (o *SecretProcessesorInputConfigSecrets) SetHarvestApiKey(v ModelsSecret)`

SetHarvestApiKey sets HarvestApiKey field to given value.

### HasHarvestApiKey

`func (o *SecretProcessesorInputConfigSecrets) HasHarvestApiKey() bool`

HasHarvestApiKey returns a boolean if a field has been set.

### GetGithubAppPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) GetGithubAppPrivateKey() ModelsSecret`

GetGithubAppPrivateKey returns the GithubAppPrivateKey field if non-nil, zero value otherwise.

### GetGithubAppPrivateKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetGithubAppPrivateKeyOk() (*ModelsSecret, bool)`

GetGithubAppPrivateKeyOk returns a tuple with the GithubAppPrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGithubAppPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) SetGithubAppPrivateKey(v ModelsSecret)`

SetGithubAppPrivateKey sets GithubAppPrivateKey field to given value.

### HasGithubAppPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) HasGithubAppPrivateKey() bool`

HasGithubAppPrivateKey returns a boolean if a field has been set.

### GetRefreshToken

`func (o *SecretProcessesorInputConfigSecrets) GetRefreshToken() ModelsSecret`

GetRefreshToken returns the RefreshToken field if non-nil, zero value otherwise.

### GetRefreshTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetRefreshTokenOk() (*ModelsSecret, bool)`

GetRefreshTokenOk returns a tuple with the RefreshToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshToken

`func (o *SecretProcessesorInputConfigSecrets) SetRefreshToken(v ModelsSecret)`

SetRefreshToken sets RefreshToken field to given value.

### HasRefreshToken

`func (o *SecretProcessesorInputConfigSecrets) HasRefreshToken() bool`

HasRefreshToken returns a boolean if a field has been set.

### GetUserOauthToken

`func (o *SecretProcessesorInputConfigSecrets) GetUserOauthToken() ModelsSecret`

GetUserOauthToken returns the UserOauthToken field if non-nil, zero value otherwise.

### GetUserOauthTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetUserOauthTokenOk() (*ModelsSecret, bool)`

GetUserOauthTokenOk returns a tuple with the UserOauthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserOauthToken

`func (o *SecretProcessesorInputConfigSecrets) SetUserOauthToken(v ModelsSecret)`

SetUserOauthToken sets UserOauthToken field to given value.

### HasUserOauthToken

`func (o *SecretProcessesorInputConfigSecrets) HasUserOauthToken() bool`

HasUserOauthToken returns a boolean if a field has been set.

### GetToken

`func (o *SecretProcessesorInputConfigSecrets) GetToken() ModelsSecret`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetTokenOk() (*ModelsSecret, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *SecretProcessesorInputConfigSecrets) SetToken(v ModelsSecret)`

SetToken sets Token field to given value.

### HasToken

`func (o *SecretProcessesorInputConfigSecrets) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) GetPrivateKey() ModelsSecret`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *SecretProcessesorInputConfigSecrets) GetPrivateKeyOk() (*ModelsSecret, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) SetPrivateKey(v ModelsSecret)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *SecretProcessesorInputConfigSecrets) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### GetTwilioAccountSid

`func (o *SecretProcessesorInputConfigSecrets) GetTwilioAccountSid() ModelsSecret`

GetTwilioAccountSid returns the TwilioAccountSid field if non-nil, zero value otherwise.

### GetTwilioAccountSidOk

`func (o *SecretProcessesorInputConfigSecrets) GetTwilioAccountSidOk() (*ModelsSecret, bool)`

GetTwilioAccountSidOk returns a tuple with the TwilioAccountSid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwilioAccountSid

`func (o *SecretProcessesorInputConfigSecrets) SetTwilioAccountSid(v ModelsSecret)`

SetTwilioAccountSid sets TwilioAccountSid field to given value.

### HasTwilioAccountSid

`func (o *SecretProcessesorInputConfigSecrets) HasTwilioAccountSid() bool`

HasTwilioAccountSid returns a boolean if a field has been set.

### GetTwilioAuthToken

`func (o *SecretProcessesorInputConfigSecrets) GetTwilioAuthToken() ModelsSecret`

GetTwilioAuthToken returns the TwilioAuthToken field if non-nil, zero value otherwise.

### GetTwilioAuthTokenOk

`func (o *SecretProcessesorInputConfigSecrets) GetTwilioAuthTokenOk() (*ModelsSecret, bool)`

GetTwilioAuthTokenOk returns a tuple with the TwilioAuthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwilioAuthToken

`func (o *SecretProcessesorInputConfigSecrets) SetTwilioAuthToken(v ModelsSecret)`

SetTwilioAuthToken sets TwilioAuthToken field to given value.

### HasTwilioAuthToken

`func (o *SecretProcessesorInputConfigSecrets) HasTwilioAuthToken() bool`

HasTwilioAuthToken returns a boolean if a field has been set.

### GetCustomerId

`func (o *SecretProcessesorInputConfigSecrets) GetCustomerId() ModelsSecret`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *SecretProcessesorInputConfigSecrets) GetCustomerIdOk() (*ModelsSecret, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *SecretProcessesorInputConfigSecrets) SetCustomerId(v ModelsSecret)`

SetCustomerId sets CustomerId field to given value.

### HasCustomerId

`func (o *SecretProcessesorInputConfigSecrets) HasCustomerId() bool`

HasCustomerId returns a boolean if a field has been set.

### GetDomain

`func (o *SecretProcessesorInputConfigSecrets) GetDomain() ModelsSecret`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SecretProcessesorInputConfigSecrets) GetDomainOk() (*ModelsSecret, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SecretProcessesorInputConfigSecrets) SetDomain(v ModelsSecret)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *SecretProcessesorInputConfigSecrets) HasDomain() bool`

HasDomain returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


