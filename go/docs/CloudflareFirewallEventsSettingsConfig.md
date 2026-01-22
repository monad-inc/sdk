# CloudflareFirewallEventsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeBotFields** | Pointer to **bool** | Include Bot Management fields (requires Enterprise plan with Bot Management add-on) | [optional] 
**LookbackDuration** | Pointer to **string** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**ZoneId** | Pointer to **string** | Cloudflare Zone ID | [optional] 

## Methods

### NewCloudflareFirewallEventsSettingsConfig

`func NewCloudflareFirewallEventsSettingsConfig() *CloudflareFirewallEventsSettingsConfig`

NewCloudflareFirewallEventsSettingsConfig instantiates a new CloudflareFirewallEventsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareFirewallEventsSettingsConfigWithDefaults

`func NewCloudflareFirewallEventsSettingsConfigWithDefaults() *CloudflareFirewallEventsSettingsConfig`

NewCloudflareFirewallEventsSettingsConfigWithDefaults instantiates a new CloudflareFirewallEventsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeBotFields

`func (o *CloudflareFirewallEventsSettingsConfig) GetIncludeBotFields() bool`

GetIncludeBotFields returns the IncludeBotFields field if non-nil, zero value otherwise.

### GetIncludeBotFieldsOk

`func (o *CloudflareFirewallEventsSettingsConfig) GetIncludeBotFieldsOk() (*bool, bool)`

GetIncludeBotFieldsOk returns a tuple with the IncludeBotFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeBotFields

`func (o *CloudflareFirewallEventsSettingsConfig) SetIncludeBotFields(v bool)`

SetIncludeBotFields sets IncludeBotFields field to given value.

### HasIncludeBotFields

`func (o *CloudflareFirewallEventsSettingsConfig) HasIncludeBotFields() bool`

HasIncludeBotFields returns a boolean if a field has been set.

### GetLookbackDuration

`func (o *CloudflareFirewallEventsSettingsConfig) GetLookbackDuration() string`

GetLookbackDuration returns the LookbackDuration field if non-nil, zero value otherwise.

### GetLookbackDurationOk

`func (o *CloudflareFirewallEventsSettingsConfig) GetLookbackDurationOk() (*string, bool)`

GetLookbackDurationOk returns a tuple with the LookbackDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookbackDuration

`func (o *CloudflareFirewallEventsSettingsConfig) SetLookbackDuration(v string)`

SetLookbackDuration sets LookbackDuration field to given value.

### HasLookbackDuration

`func (o *CloudflareFirewallEventsSettingsConfig) HasLookbackDuration() bool`

HasLookbackDuration returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareFirewallEventsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareFirewallEventsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareFirewallEventsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareFirewallEventsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetZoneId

`func (o *CloudflareFirewallEventsSettingsConfig) GetZoneId() string`

GetZoneId returns the ZoneId field if non-nil, zero value otherwise.

### GetZoneIdOk

`func (o *CloudflareFirewallEventsSettingsConfig) GetZoneIdOk() (*string, bool)`

GetZoneIdOk returns a tuple with the ZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneId

`func (o *CloudflareFirewallEventsSettingsConfig) SetZoneId(v string)`

SetZoneId sets ZoneId field to given value.

### HasZoneId

`func (o *CloudflareFirewallEventsSettingsConfig) HasZoneId() bool`

HasZoneId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


