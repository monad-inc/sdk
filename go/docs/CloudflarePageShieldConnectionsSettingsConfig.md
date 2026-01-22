# CloudflarePageShieldConnectionsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**ExcludeCdnCgi** | Pointer to **bool** | Exclude connections to Cloudflare /cdn-cgi paths. Default: true | [optional] 
**Status** | Pointer to **string** | Filter connections by status: \&quot;active\&quot;, \&quot;infrequent\&quot;, or \&quot;inactive\&quot;. Default: \&quot;active\&quot; | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**ZoneIds** | Pointer to **[]string** | Optional list of specific zone IDs to fetch connections from. If empty, fetches from all zones. | [optional] 

## Methods

### NewCloudflarePageShieldConnectionsSettingsConfig

`func NewCloudflarePageShieldConnectionsSettingsConfig() *CloudflarePageShieldConnectionsSettingsConfig`

NewCloudflarePageShieldConnectionsSettingsConfig instantiates a new CloudflarePageShieldConnectionsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflarePageShieldConnectionsSettingsConfigWithDefaults

`func NewCloudflarePageShieldConnectionsSettingsConfigWithDefaults() *CloudflarePageShieldConnectionsSettingsConfig`

NewCloudflarePageShieldConnectionsSettingsConfigWithDefaults instantiates a new CloudflarePageShieldConnectionsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CloudflarePageShieldConnectionsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CloudflarePageShieldConnectionsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetExcludeCdnCgi

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetExcludeCdnCgi() bool`

GetExcludeCdnCgi returns the ExcludeCdnCgi field if non-nil, zero value otherwise.

### GetExcludeCdnCgiOk

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetExcludeCdnCgiOk() (*bool, bool)`

GetExcludeCdnCgiOk returns a tuple with the ExcludeCdnCgi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeCdnCgi

`func (o *CloudflarePageShieldConnectionsSettingsConfig) SetExcludeCdnCgi(v bool)`

SetExcludeCdnCgi sets ExcludeCdnCgi field to given value.

### HasExcludeCdnCgi

`func (o *CloudflarePageShieldConnectionsSettingsConfig) HasExcludeCdnCgi() bool`

HasExcludeCdnCgi returns a boolean if a field has been set.

### GetStatus

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CloudflarePageShieldConnectionsSettingsConfig) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CloudflarePageShieldConnectionsSettingsConfig) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflarePageShieldConnectionsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflarePageShieldConnectionsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetZoneIds

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetZoneIds() []string`

GetZoneIds returns the ZoneIds field if non-nil, zero value otherwise.

### GetZoneIdsOk

`func (o *CloudflarePageShieldConnectionsSettingsConfig) GetZoneIdsOk() (*[]string, bool)`

GetZoneIdsOk returns a tuple with the ZoneIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneIds

`func (o *CloudflarePageShieldConnectionsSettingsConfig) SetZoneIds(v []string)`

SetZoneIds sets ZoneIds field to given value.

### HasZoneIds

`func (o *CloudflarePageShieldConnectionsSettingsConfig) HasZoneIds() bool`

HasZoneIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


