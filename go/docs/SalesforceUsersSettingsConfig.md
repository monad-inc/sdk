# SalesforceUsersSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**DomainUrl** | Pointer to **string** | Domain URL for the Salesforce instance | [optional] 
**IncludeInactive** | Pointer to **bool** | Include inactive users in the results | [optional] 
**OrganizationId** | Pointer to **string** | Organization ID for the Salesforce instance | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewSalesforceUsersSettingsConfig

`func NewSalesforceUsersSettingsConfig() *SalesforceUsersSettingsConfig`

NewSalesforceUsersSettingsConfig instantiates a new SalesforceUsersSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesforceUsersSettingsConfigWithDefaults

`func NewSalesforceUsersSettingsConfigWithDefaults() *SalesforceUsersSettingsConfig`

NewSalesforceUsersSettingsConfigWithDefaults instantiates a new SalesforceUsersSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *SalesforceUsersSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SalesforceUsersSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SalesforceUsersSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SalesforceUsersSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetDomainUrl

`func (o *SalesforceUsersSettingsConfig) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *SalesforceUsersSettingsConfig) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *SalesforceUsersSettingsConfig) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.

### HasDomainUrl

`func (o *SalesforceUsersSettingsConfig) HasDomainUrl() bool`

HasDomainUrl returns a boolean if a field has been set.

### GetIncludeInactive

`func (o *SalesforceUsersSettingsConfig) GetIncludeInactive() bool`

GetIncludeInactive returns the IncludeInactive field if non-nil, zero value otherwise.

### GetIncludeInactiveOk

`func (o *SalesforceUsersSettingsConfig) GetIncludeInactiveOk() (*bool, bool)`

GetIncludeInactiveOk returns a tuple with the IncludeInactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInactive

`func (o *SalesforceUsersSettingsConfig) SetIncludeInactive(v bool)`

SetIncludeInactive sets IncludeInactive field to given value.

### HasIncludeInactive

`func (o *SalesforceUsersSettingsConfig) HasIncludeInactive() bool`

HasIncludeInactive returns a boolean if a field has been set.

### GetOrganizationId

`func (o *SalesforceUsersSettingsConfig) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *SalesforceUsersSettingsConfig) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *SalesforceUsersSettingsConfig) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *SalesforceUsersSettingsConfig) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *SalesforceUsersSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *SalesforceUsersSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *SalesforceUsersSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *SalesforceUsersSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


