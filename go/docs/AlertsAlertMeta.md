# AlertsAlertMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** |  | [optional] 
**Config** | Pointer to **interface{}** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Granularity** | Pointer to **string** |  | [optional] 
**House** | Pointer to **string** |  | [optional] 
**Internal** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Tier** | Pointer to **int32** |  | [optional] 
**TypeId** | Pointer to **string** |  | [optional] 

## Methods

### NewAlertsAlertMeta

`func NewAlertsAlertMeta() *AlertsAlertMeta`

NewAlertsAlertMeta instantiates a new AlertsAlertMeta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertsAlertMetaWithDefaults

`func NewAlertsAlertMetaWithDefaults() *AlertsAlertMeta`

NewAlertsAlertMetaWithDefaults instantiates a new AlertsAlertMeta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *AlertsAlertMeta) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *AlertsAlertMeta) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *AlertsAlertMeta) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *AlertsAlertMeta) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetConfig

`func (o *AlertsAlertMeta) GetConfig() interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *AlertsAlertMeta) GetConfigOk() (*interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *AlertsAlertMeta) SetConfig(v interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *AlertsAlertMeta) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### SetConfigNil

`func (o *AlertsAlertMeta) SetConfigNil(b bool)`

 SetConfigNil sets the value for Config to be an explicit nil

### UnsetConfig
`func (o *AlertsAlertMeta) UnsetConfig()`

UnsetConfig ensures that no value is present for Config, not even an explicit nil
### GetDescription

`func (o *AlertsAlertMeta) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AlertsAlertMeta) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AlertsAlertMeta) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AlertsAlertMeta) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGranularity

`func (o *AlertsAlertMeta) GetGranularity() string`

GetGranularity returns the Granularity field if non-nil, zero value otherwise.

### GetGranularityOk

`func (o *AlertsAlertMeta) GetGranularityOk() (*string, bool)`

GetGranularityOk returns a tuple with the Granularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGranularity

`func (o *AlertsAlertMeta) SetGranularity(v string)`

SetGranularity sets Granularity field to given value.

### HasGranularity

`func (o *AlertsAlertMeta) HasGranularity() bool`

HasGranularity returns a boolean if a field has been set.

### GetHouse

`func (o *AlertsAlertMeta) GetHouse() string`

GetHouse returns the House field if non-nil, zero value otherwise.

### GetHouseOk

`func (o *AlertsAlertMeta) GetHouseOk() (*string, bool)`

GetHouseOk returns a tuple with the House field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouse

`func (o *AlertsAlertMeta) SetHouse(v string)`

SetHouse sets House field to given value.

### HasHouse

`func (o *AlertsAlertMeta) HasHouse() bool`

HasHouse returns a boolean if a field has been set.

### GetInternal

`func (o *AlertsAlertMeta) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *AlertsAlertMeta) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *AlertsAlertMeta) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *AlertsAlertMeta) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetName

`func (o *AlertsAlertMeta) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AlertsAlertMeta) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AlertsAlertMeta) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AlertsAlertMeta) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTier

`func (o *AlertsAlertMeta) GetTier() int32`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *AlertsAlertMeta) GetTierOk() (*int32, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *AlertsAlertMeta) SetTier(v int32)`

SetTier sets Tier field to given value.

### HasTier

`func (o *AlertsAlertMeta) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetTypeId

`func (o *AlertsAlertMeta) GetTypeId() string`

GetTypeId returns the TypeId field if non-nil, zero value otherwise.

### GetTypeIdOk

`func (o *AlertsAlertMeta) GetTypeIdOk() (*string, bool)`

GetTypeIdOk returns a tuple with the TypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeId

`func (o *AlertsAlertMeta) SetTypeId(v string)`

SetTypeId sets TypeId field to given value.

### HasTypeId

`func (o *AlertsAlertMeta) HasTypeId() bool`

HasTypeId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


