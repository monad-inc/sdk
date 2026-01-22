# OrgAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** | Authentication type to use | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**GithubAppInstallationId** | Pointer to **string** | GitHub App Installation ID (required when using GitHub App authentication) | [optional] 
**GithubClientId** | Pointer to **string** | GitHub Client ID (alternative to personal access token) | [optional] 
**Include** | Pointer to **string** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**Organization** | Pointer to **string** | Your GitHub organization name | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewOrgAuditLogsSettingsConfig

`func NewOrgAuditLogsSettingsConfig() *OrgAuditLogsSettingsConfig`

NewOrgAuditLogsSettingsConfig instantiates a new OrgAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrgAuditLogsSettingsConfigWithDefaults

`func NewOrgAuditLogsSettingsConfigWithDefaults() *OrgAuditLogsSettingsConfig`

NewOrgAuditLogsSettingsConfigWithDefaults instantiates a new OrgAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *OrgAuditLogsSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *OrgAuditLogsSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *OrgAuditLogsSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *OrgAuditLogsSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *OrgAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *OrgAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *OrgAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *OrgAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetGithubAppInstallationId

`func (o *OrgAuditLogsSettingsConfig) GetGithubAppInstallationId() string`

GetGithubAppInstallationId returns the GithubAppInstallationId field if non-nil, zero value otherwise.

### GetGithubAppInstallationIdOk

`func (o *OrgAuditLogsSettingsConfig) GetGithubAppInstallationIdOk() (*string, bool)`

GetGithubAppInstallationIdOk returns a tuple with the GithubAppInstallationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGithubAppInstallationId

`func (o *OrgAuditLogsSettingsConfig) SetGithubAppInstallationId(v string)`

SetGithubAppInstallationId sets GithubAppInstallationId field to given value.

### HasGithubAppInstallationId

`func (o *OrgAuditLogsSettingsConfig) HasGithubAppInstallationId() bool`

HasGithubAppInstallationId returns a boolean if a field has been set.

### GetGithubClientId

`func (o *OrgAuditLogsSettingsConfig) GetGithubClientId() string`

GetGithubClientId returns the GithubClientId field if non-nil, zero value otherwise.

### GetGithubClientIdOk

`func (o *OrgAuditLogsSettingsConfig) GetGithubClientIdOk() (*string, bool)`

GetGithubClientIdOk returns a tuple with the GithubClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGithubClientId

`func (o *OrgAuditLogsSettingsConfig) SetGithubClientId(v string)`

SetGithubClientId sets GithubClientId field to given value.

### HasGithubClientId

`func (o *OrgAuditLogsSettingsConfig) HasGithubClientId() bool`

HasGithubClientId returns a boolean if a field has been set.

### GetInclude

`func (o *OrgAuditLogsSettingsConfig) GetInclude() string`

GetInclude returns the Include field if non-nil, zero value otherwise.

### GetIncludeOk

`func (o *OrgAuditLogsSettingsConfig) GetIncludeOk() (*string, bool)`

GetIncludeOk returns a tuple with the Include field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclude

`func (o *OrgAuditLogsSettingsConfig) SetInclude(v string)`

SetInclude sets Include field to given value.

### HasInclude

`func (o *OrgAuditLogsSettingsConfig) HasInclude() bool`

HasInclude returns a boolean if a field has been set.

### GetOrganization

`func (o *OrgAuditLogsSettingsConfig) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *OrgAuditLogsSettingsConfig) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *OrgAuditLogsSettingsConfig) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *OrgAuditLogsSettingsConfig) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *OrgAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *OrgAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *OrgAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *OrgAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


