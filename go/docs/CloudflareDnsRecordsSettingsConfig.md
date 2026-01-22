# CloudflareDnsRecordsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**ZoneIds** | Pointer to **[]string** | Optional list of specific zone IDs to fetch DNS records from. If empty, fetches from all zones. | [optional] 

## Methods

### NewCloudflareDnsRecordsSettingsConfig

`func NewCloudflareDnsRecordsSettingsConfig() *CloudflareDnsRecordsSettingsConfig`

NewCloudflareDnsRecordsSettingsConfig instantiates a new CloudflareDnsRecordsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareDnsRecordsSettingsConfigWithDefaults

`func NewCloudflareDnsRecordsSettingsConfigWithDefaults() *CloudflareDnsRecordsSettingsConfig`

NewCloudflareDnsRecordsSettingsConfigWithDefaults instantiates a new CloudflareDnsRecordsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *CloudflareDnsRecordsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CloudflareDnsRecordsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CloudflareDnsRecordsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CloudflareDnsRecordsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareDnsRecordsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareDnsRecordsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareDnsRecordsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareDnsRecordsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetZoneIds

`func (o *CloudflareDnsRecordsSettingsConfig) GetZoneIds() []string`

GetZoneIds returns the ZoneIds field if non-nil, zero value otherwise.

### GetZoneIdsOk

`func (o *CloudflareDnsRecordsSettingsConfig) GetZoneIdsOk() (*[]string, bool)`

GetZoneIdsOk returns a tuple with the ZoneIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneIds

`func (o *CloudflareDnsRecordsSettingsConfig) SetZoneIds(v []string)`

SetZoneIds sets ZoneIds field to given value.

### HasZoneIds

`func (o *CloudflareDnsRecordsSettingsConfig) HasZoneIds() bool`

HasZoneIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


