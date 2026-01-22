# ZendeskAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** | AuthType is the type of authentication used for the input | [optional] 
**EmailAddress** | Pointer to **string** | This is the email address registered with your Zendesk account | [optional] 
**SubDomain** | Pointer to **string** | This is the subdomain found in your Zendesk account URL For example, if the URL is https://demo.zendesk.com then the subdomain will be demo | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewZendeskAuditLogsSettingsConfig

`func NewZendeskAuditLogsSettingsConfig() *ZendeskAuditLogsSettingsConfig`

NewZendeskAuditLogsSettingsConfig instantiates a new ZendeskAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewZendeskAuditLogsSettingsConfigWithDefaults

`func NewZendeskAuditLogsSettingsConfigWithDefaults() *ZendeskAuditLogsSettingsConfig`

NewZendeskAuditLogsSettingsConfigWithDefaults instantiates a new ZendeskAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *ZendeskAuditLogsSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *ZendeskAuditLogsSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *ZendeskAuditLogsSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *ZendeskAuditLogsSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetEmailAddress

`func (o *ZendeskAuditLogsSettingsConfig) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *ZendeskAuditLogsSettingsConfig) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *ZendeskAuditLogsSettingsConfig) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *ZendeskAuditLogsSettingsConfig) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetSubDomain

`func (o *ZendeskAuditLogsSettingsConfig) GetSubDomain() string`

GetSubDomain returns the SubDomain field if non-nil, zero value otherwise.

### GetSubDomainOk

`func (o *ZendeskAuditLogsSettingsConfig) GetSubDomainOk() (*string, bool)`

GetSubDomainOk returns a tuple with the SubDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubDomain

`func (o *ZendeskAuditLogsSettingsConfig) SetSubDomain(v string)`

SetSubDomain sets SubDomain field to given value.

### HasSubDomain

`func (o *ZendeskAuditLogsSettingsConfig) HasSubDomain() bool`

HasSubDomain returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *ZendeskAuditLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *ZendeskAuditLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *ZendeskAuditLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *ZendeskAuditLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


