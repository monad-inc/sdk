# Sentinelv2DCRConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Managed** | Pointer to [**Sentinelv2ManagedDCRVariant**](Sentinelv2ManagedDCRVariant.md) |  | [optional] 
**Manual** | Pointer to [**Sentinelv2ManualDCRVariant**](Sentinelv2ManualDCRVariant.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewSentinelv2DCRConfig

`func NewSentinelv2DCRConfig(type_ string, ) *Sentinelv2DCRConfig`

NewSentinelv2DCRConfig instantiates a new Sentinelv2DCRConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentinelv2DCRConfigWithDefaults

`func NewSentinelv2DCRConfigWithDefaults() *Sentinelv2DCRConfig`

NewSentinelv2DCRConfigWithDefaults instantiates a new Sentinelv2DCRConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetManaged

`func (o *Sentinelv2DCRConfig) GetManaged() Sentinelv2ManagedDCRVariant`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *Sentinelv2DCRConfig) GetManagedOk() (*Sentinelv2ManagedDCRVariant, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *Sentinelv2DCRConfig) SetManaged(v Sentinelv2ManagedDCRVariant)`

SetManaged sets Managed field to given value.

### HasManaged

`func (o *Sentinelv2DCRConfig) HasManaged() bool`

HasManaged returns a boolean if a field has been set.

### GetManual

`func (o *Sentinelv2DCRConfig) GetManual() Sentinelv2ManualDCRVariant`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *Sentinelv2DCRConfig) GetManualOk() (*Sentinelv2ManualDCRVariant, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *Sentinelv2DCRConfig) SetManual(v Sentinelv2ManualDCRVariant)`

SetManual sets Manual field to given value.

### HasManual

`func (o *Sentinelv2DCRConfig) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetType

`func (o *Sentinelv2DCRConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sentinelv2DCRConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sentinelv2DCRConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


