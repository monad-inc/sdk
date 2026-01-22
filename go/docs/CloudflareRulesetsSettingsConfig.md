# CloudflareRulesetsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Your Cloudflare account ID (for account-level rulesets). Required if ZoneIDs is not specified. | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**ZoneIds** | Pointer to **[]string** | List of zone IDs (for zone-level rulesets). If empty and AccountID is not specified, fetches from all zones. | [optional] 

## Methods

### NewCloudflareRulesetsSettingsConfig

`func NewCloudflareRulesetsSettingsConfig() *CloudflareRulesetsSettingsConfig`

NewCloudflareRulesetsSettingsConfig instantiates a new CloudflareRulesetsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareRulesetsSettingsConfigWithDefaults

`func NewCloudflareRulesetsSettingsConfigWithDefaults() *CloudflareRulesetsSettingsConfig`

NewCloudflareRulesetsSettingsConfigWithDefaults instantiates a new CloudflareRulesetsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *CloudflareRulesetsSettingsConfig) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *CloudflareRulesetsSettingsConfig) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *CloudflareRulesetsSettingsConfig) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *CloudflareRulesetsSettingsConfig) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetCron

`func (o *CloudflareRulesetsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CloudflareRulesetsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CloudflareRulesetsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CloudflareRulesetsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareRulesetsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareRulesetsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareRulesetsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareRulesetsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetZoneIds

`func (o *CloudflareRulesetsSettingsConfig) GetZoneIds() []string`

GetZoneIds returns the ZoneIds field if non-nil, zero value otherwise.

### GetZoneIdsOk

`func (o *CloudflareRulesetsSettingsConfig) GetZoneIdsOk() (*[]string, bool)`

GetZoneIdsOk returns a tuple with the ZoneIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneIds

`func (o *CloudflareRulesetsSettingsConfig) SetZoneIds(v []string)`

SetZoneIds sets ZoneIds field to given value.

### HasZoneIds

`func (o *CloudflareRulesetsSettingsConfig) HasZoneIds() bool`

HasZoneIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


