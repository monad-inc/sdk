# SentryOrgAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HostName** | Pointer to **string** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. | [optional] 
**OrgSlug** | Pointer to **string** | The ID or slug of the organization | [optional] 

## Methods

### NewSentryOrgAuditLogsSettingsConfig

`func NewSentryOrgAuditLogsSettingsConfig() *SentryOrgAuditLogsSettingsConfig`

NewSentryOrgAuditLogsSettingsConfig instantiates a new SentryOrgAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentryOrgAuditLogsSettingsConfigWithDefaults

`func NewSentryOrgAuditLogsSettingsConfigWithDefaults() *SentryOrgAuditLogsSettingsConfig`

NewSentryOrgAuditLogsSettingsConfigWithDefaults instantiates a new SentryOrgAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHostName

`func (o *SentryOrgAuditLogsSettingsConfig) GetHostName() string`

GetHostName returns the HostName field if non-nil, zero value otherwise.

### GetHostNameOk

`func (o *SentryOrgAuditLogsSettingsConfig) GetHostNameOk() (*string, bool)`

GetHostNameOk returns a tuple with the HostName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostName

`func (o *SentryOrgAuditLogsSettingsConfig) SetHostName(v string)`

SetHostName sets HostName field to given value.

### HasHostName

`func (o *SentryOrgAuditLogsSettingsConfig) HasHostName() bool`

HasHostName returns a boolean if a field has been set.

### GetOrgSlug

`func (o *SentryOrgAuditLogsSettingsConfig) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *SentryOrgAuditLogsSettingsConfig) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *SentryOrgAuditLogsSettingsConfig) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *SentryOrgAuditLogsSettingsConfig) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


