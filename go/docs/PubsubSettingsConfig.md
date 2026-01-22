# PubsubSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DomainUrl** | Pointer to **string** | Domain URL for the Salesforce instance | [optional] 
**OrganizationId** | Pointer to **string** | Organization ID for the Salesforce instance | [optional] 
**Topic** | Pointer to **string** | Pub/Sub topic to subscribe to | [optional] 

## Methods

### NewPubsubSettingsConfig

`func NewPubsubSettingsConfig() *PubsubSettingsConfig`

NewPubsubSettingsConfig instantiates a new PubsubSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPubsubSettingsConfigWithDefaults

`func NewPubsubSettingsConfigWithDefaults() *PubsubSettingsConfig`

NewPubsubSettingsConfigWithDefaults instantiates a new PubsubSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomainUrl

`func (o *PubsubSettingsConfig) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *PubsubSettingsConfig) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *PubsubSettingsConfig) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.

### HasDomainUrl

`func (o *PubsubSettingsConfig) HasDomainUrl() bool`

HasDomainUrl returns a boolean if a field has been set.

### GetOrganizationId

`func (o *PubsubSettingsConfig) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *PubsubSettingsConfig) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *PubsubSettingsConfig) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *PubsubSettingsConfig) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetTopic

`func (o *PubsubSettingsConfig) GetTopic() string`

GetTopic returns the Topic field if non-nil, zero value otherwise.

### GetTopicOk

`func (o *PubsubSettingsConfig) GetTopicOk() (*string, bool)`

GetTopicOk returns a tuple with the Topic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopic

`func (o *PubsubSettingsConfig) SetTopic(v string)`

SetTopic sets Topic field to given value.

### HasTopic

`func (o *PubsubSettingsConfig) HasTopic() bool`

HasTopic returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


