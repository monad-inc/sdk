# EventSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppName** | Pointer to **string** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**Cloud** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**MemberCid** | Pointer to **string** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewEventSettingsConfig

`func NewEventSettingsConfig() *EventSettingsConfig`

NewEventSettingsConfig instantiates a new EventSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventSettingsConfigWithDefaults

`func NewEventSettingsConfigWithDefaults() *EventSettingsConfig`

NewEventSettingsConfigWithDefaults instantiates a new EventSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppName

`func (o *EventSettingsConfig) GetAppName() string`

GetAppName returns the AppName field if non-nil, zero value otherwise.

### GetAppNameOk

`func (o *EventSettingsConfig) GetAppNameOk() (*string, bool)`

GetAppNameOk returns a tuple with the AppName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppName

`func (o *EventSettingsConfig) SetAppName(v string)`

SetAppName sets AppName field to given value.

### HasAppName

`func (o *EventSettingsConfig) HasAppName() bool`

HasAppName returns a boolean if a field has been set.

### GetCloud

`func (o *EventSettingsConfig) GetCloud() string`

GetCloud returns the Cloud field if non-nil, zero value otherwise.

### GetCloudOk

`func (o *EventSettingsConfig) GetCloudOk() (*string, bool)`

GetCloudOk returns a tuple with the Cloud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloud

`func (o *EventSettingsConfig) SetCloud(v string)`

SetCloud sets Cloud field to given value.

### HasCloud

`func (o *EventSettingsConfig) HasCloud() bool`

HasCloud returns a boolean if a field has been set.

### GetMemberCid

`func (o *EventSettingsConfig) GetMemberCid() string`

GetMemberCid returns the MemberCid field if non-nil, zero value otherwise.

### GetMemberCidOk

`func (o *EventSettingsConfig) GetMemberCidOk() (*string, bool)`

GetMemberCidOk returns a tuple with the MemberCid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberCid

`func (o *EventSettingsConfig) SetMemberCid(v string)`

SetMemberCid sets MemberCid field to given value.

### HasMemberCid

`func (o *EventSettingsConfig) HasMemberCid() bool`

HasMemberCid returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *EventSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *EventSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *EventSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *EventSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


