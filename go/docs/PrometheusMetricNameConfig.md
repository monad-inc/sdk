# PrometheusMetricNameConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** | Pointer to [**PrometheusFieldMetricVariant**](PrometheusFieldMetricVariant.md) |  | [optional] 
**Static** | Pointer to [**PrometheusStaticMetricVariant**](PrometheusStaticMetricVariant.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusMetricNameConfig

`func NewPrometheusMetricNameConfig() *PrometheusMetricNameConfig`

NewPrometheusMetricNameConfig instantiates a new PrometheusMetricNameConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusMetricNameConfigWithDefaults

`func NewPrometheusMetricNameConfigWithDefaults() *PrometheusMetricNameConfig`

NewPrometheusMetricNameConfigWithDefaults instantiates a new PrometheusMetricNameConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetField

`func (o *PrometheusMetricNameConfig) GetField() PrometheusFieldMetricVariant`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *PrometheusMetricNameConfig) GetFieldOk() (*PrometheusFieldMetricVariant, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *PrometheusMetricNameConfig) SetField(v PrometheusFieldMetricVariant)`

SetField sets Field field to given value.

### HasField

`func (o *PrometheusMetricNameConfig) HasField() bool`

HasField returns a boolean if a field has been set.

### GetStatic

`func (o *PrometheusMetricNameConfig) GetStatic() PrometheusStaticMetricVariant`

GetStatic returns the Static field if non-nil, zero value otherwise.

### GetStaticOk

`func (o *PrometheusMetricNameConfig) GetStaticOk() (*PrometheusStaticMetricVariant, bool)`

GetStaticOk returns a tuple with the Static field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatic

`func (o *PrometheusMetricNameConfig) SetStatic(v PrometheusStaticMetricVariant)`

SetStatic sets Static field to given value.

### HasStatic

`func (o *PrometheusMetricNameConfig) HasStatic() bool`

HasStatic returns a boolean if a field has been set.

### GetType

`func (o *PrometheusMetricNameConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PrometheusMetricNameConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PrometheusMetricNameConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PrometheusMetricNameConfig) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


