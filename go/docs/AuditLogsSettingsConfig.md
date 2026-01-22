# AuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Actions** | Pointer to **[]string** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) | [optional] 
**Actor** | Pointer to **string** | Filter by the username that initiated the action | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Country** | Pointer to **string** | Filter by actor&#39;s country code (e.g., US) | [optional] 
**Enterprise** | Pointer to **string** | Your GitHub enterprise slug or ID | [optional] 
**Include** | Pointer to **string** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**Organization** | Pointer to **string** | Filter by organization name | [optional] 
**Repository** | Pointer to **string** | Filter by repository (format: org-name/repo-name) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**User** | Pointer to **string** | Filter by the username that was affected by the action | [optional] 

## Methods

### NewAuditLogsSettingsConfig

`func NewAuditLogsSettingsConfig() *AuditLogsSettingsConfig`

NewAuditLogsSettingsConfig instantiates a new AuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuditLogsSettingsConfigWithDefaults

`func NewAuditLogsSettingsConfigWithDefaults() *AuditLogsSettingsConfig`

NewAuditLogsSettingsConfigWithDefaults instantiates a new AuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActions

`func (o *AuditLogsSettingsConfig) GetActions() []string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *AuditLogsSettingsConfig) GetActionsOk() (*[]string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *AuditLogsSettingsConfig) SetActions(v []string)`

SetActions sets Actions field to given value.

### HasActions

`func (o *AuditLogsSettingsConfig) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetActor

`func (o *AuditLogsSettingsConfig) GetActor() string`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *AuditLogsSettingsConfig) GetActorOk() (*string, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *AuditLogsSettingsConfig) SetActor(v string)`

SetActor sets Actor field to given value.

### HasActor

`func (o *AuditLogsSettingsConfig) HasActor() bool`

HasActor returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *AuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *AuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *AuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *AuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetCountry

`func (o *AuditLogsSettingsConfig) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *AuditLogsSettingsConfig) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *AuditLogsSettingsConfig) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *AuditLogsSettingsConfig) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetEnterprise

`func (o *AuditLogsSettingsConfig) GetEnterprise() string`

GetEnterprise returns the Enterprise field if non-nil, zero value otherwise.

### GetEnterpriseOk

`func (o *AuditLogsSettingsConfig) GetEnterpriseOk() (*string, bool)`

GetEnterpriseOk returns a tuple with the Enterprise field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnterprise

`func (o *AuditLogsSettingsConfig) SetEnterprise(v string)`

SetEnterprise sets Enterprise field to given value.

### HasEnterprise

`func (o *AuditLogsSettingsConfig) HasEnterprise() bool`

HasEnterprise returns a boolean if a field has been set.

### GetInclude

`func (o *AuditLogsSettingsConfig) GetInclude() string`

GetInclude returns the Include field if non-nil, zero value otherwise.

### GetIncludeOk

`func (o *AuditLogsSettingsConfig) GetIncludeOk() (*string, bool)`

GetIncludeOk returns a tuple with the Include field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclude

`func (o *AuditLogsSettingsConfig) SetInclude(v string)`

SetInclude sets Include field to given value.

### HasInclude

`func (o *AuditLogsSettingsConfig) HasInclude() bool`

HasInclude returns a boolean if a field has been set.

### GetOrganization

`func (o *AuditLogsSettingsConfig) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *AuditLogsSettingsConfig) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *AuditLogsSettingsConfig) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *AuditLogsSettingsConfig) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### GetRepository

`func (o *AuditLogsSettingsConfig) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *AuditLogsSettingsConfig) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *AuditLogsSettingsConfig) SetRepository(v string)`

SetRepository sets Repository field to given value.

### HasRepository

`func (o *AuditLogsSettingsConfig) HasRepository() bool`

HasRepository returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *AuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetUser

`func (o *AuditLogsSettingsConfig) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *AuditLogsSettingsConfig) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *AuditLogsSettingsConfig) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *AuditLogsSettingsConfig) HasUser() bool`

HasUser returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


