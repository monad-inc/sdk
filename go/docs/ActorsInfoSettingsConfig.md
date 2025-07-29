# ActorsInfoSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActorType** | Pointer to **string** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**CloudType** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**Sort** | Pointer to **string** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. | [optional] 
**TargetIndustries** | Pointer to **string** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewActorsInfoSettingsConfig

`func NewActorsInfoSettingsConfig() *ActorsInfoSettingsConfig`

NewActorsInfoSettingsConfig instantiates a new ActorsInfoSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActorsInfoSettingsConfigWithDefaults

`func NewActorsInfoSettingsConfigWithDefaults() *ActorsInfoSettingsConfig`

NewActorsInfoSettingsConfigWithDefaults instantiates a new ActorsInfoSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActorType

`func (o *ActorsInfoSettingsConfig) GetActorType() string`

GetActorType returns the ActorType field if non-nil, zero value otherwise.

### GetActorTypeOk

`func (o *ActorsInfoSettingsConfig) GetActorTypeOk() (*string, bool)`

GetActorTypeOk returns a tuple with the ActorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActorType

`func (o *ActorsInfoSettingsConfig) SetActorType(v string)`

SetActorType sets ActorType field to given value.

### HasActorType

`func (o *ActorsInfoSettingsConfig) HasActorType() bool`

HasActorType returns a boolean if a field has been set.

### GetCloudType

`func (o *ActorsInfoSettingsConfig) GetCloudType() string`

GetCloudType returns the CloudType field if non-nil, zero value otherwise.

### GetCloudTypeOk

`func (o *ActorsInfoSettingsConfig) GetCloudTypeOk() (*string, bool)`

GetCloudTypeOk returns a tuple with the CloudType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudType

`func (o *ActorsInfoSettingsConfig) SetCloudType(v string)`

SetCloudType sets CloudType field to given value.

### HasCloudType

`func (o *ActorsInfoSettingsConfig) HasCloudType() bool`

HasCloudType returns a boolean if a field has been set.

### GetCron

`func (o *ActorsInfoSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *ActorsInfoSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *ActorsInfoSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *ActorsInfoSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetSort

`func (o *ActorsInfoSettingsConfig) GetSort() string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *ActorsInfoSettingsConfig) GetSortOk() (*string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *ActorsInfoSettingsConfig) SetSort(v string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *ActorsInfoSettingsConfig) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetTargetIndustries

`func (o *ActorsInfoSettingsConfig) GetTargetIndustries() string`

GetTargetIndustries returns the TargetIndustries field if non-nil, zero value otherwise.

### GetTargetIndustriesOk

`func (o *ActorsInfoSettingsConfig) GetTargetIndustriesOk() (*string, bool)`

GetTargetIndustriesOk returns a tuple with the TargetIndustries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIndustries

`func (o *ActorsInfoSettingsConfig) SetTargetIndustries(v string)`

SetTargetIndustries sets TargetIndustries field to given value.

### HasTargetIndustries

`func (o *ActorsInfoSettingsConfig) HasTargetIndustries() bool`

HasTargetIndustries returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *ActorsInfoSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *ActorsInfoSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *ActorsInfoSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *ActorsInfoSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


