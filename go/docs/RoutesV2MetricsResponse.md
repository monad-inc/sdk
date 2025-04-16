# RoutesV2MetricsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EgressBytes** | Pointer to [**[]RoutesV2PipelineMetric**](RoutesV2PipelineMetric.md) |  | [optional] 
**IngressBytes** | Pointer to [**[]RoutesV2PipelineMetric**](RoutesV2PipelineMetric.md) |  | [optional] 

## Methods

### NewRoutesV2MetricsResponse

`func NewRoutesV2MetricsResponse() *RoutesV2MetricsResponse`

NewRoutesV2MetricsResponse instantiates a new RoutesV2MetricsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2MetricsResponseWithDefaults

`func NewRoutesV2MetricsResponseWithDefaults() *RoutesV2MetricsResponse`

NewRoutesV2MetricsResponseWithDefaults instantiates a new RoutesV2MetricsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEgressBytes

`func (o *RoutesV2MetricsResponse) GetEgressBytes() []RoutesV2PipelineMetric`

GetEgressBytes returns the EgressBytes field if non-nil, zero value otherwise.

### GetEgressBytesOk

`func (o *RoutesV2MetricsResponse) GetEgressBytesOk() (*[]RoutesV2PipelineMetric, bool)`

GetEgressBytesOk returns a tuple with the EgressBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgressBytes

`func (o *RoutesV2MetricsResponse) SetEgressBytes(v []RoutesV2PipelineMetric)`

SetEgressBytes sets EgressBytes field to given value.

### HasEgressBytes

`func (o *RoutesV2MetricsResponse) HasEgressBytes() bool`

HasEgressBytes returns a boolean if a field has been set.

### GetIngressBytes

`func (o *RoutesV2MetricsResponse) GetIngressBytes() []RoutesV2PipelineMetric`

GetIngressBytes returns the IngressBytes field if non-nil, zero value otherwise.

### GetIngressBytesOk

`func (o *RoutesV2MetricsResponse) GetIngressBytesOk() (*[]RoutesV2PipelineMetric, bool)`

GetIngressBytesOk returns a tuple with the IngressBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngressBytes

`func (o *RoutesV2MetricsResponse) SetIngressBytes(v []RoutesV2PipelineMetric)`

SetIngressBytes sets IngressBytes field to given value.

### HasIngressBytes

`func (o *RoutesV2MetricsResponse) HasIngressBytes() bool`

HasIngressBytes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


