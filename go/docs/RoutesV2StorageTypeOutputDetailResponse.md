# RoutesV2StorageTypeOutputDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaselineMethod** | Pointer to **string** |  | [optional] 
**CostPerGb** | Pointer to **float32** |  | [optional] 
**EgressBytes** | Pointer to **int32** |  | [optional] 
**EgressGb** | Pointer to **float32** |  | [optional] 
**HasOwnPrice** | Pointer to **bool** |  | [optional] 
**IngressBytes** | Pointer to **int32** |  | [optional] 
**IngressGb** | Pointer to **float32** |  | [optional] 
**InputId** | Pointer to **string** |  | [optional] 
**NodeId** | Pointer to **string** |  | [optional] 
**OutputDeleted** | Pointer to **bool** |  | [optional] 
**OutputId** | Pointer to **string** |  | [optional] 
**OutputName** | Pointer to **string** |  | [optional] 
**PipelineId** | Pointer to **string** |  | [optional] 
**StorageType** | Pointer to **string** |  | [optional] 
**TotalCost** | Pointer to **float32** |  | [optional] 

## Methods

### NewRoutesV2StorageTypeOutputDetailResponse

`func NewRoutesV2StorageTypeOutputDetailResponse() *RoutesV2StorageTypeOutputDetailResponse`

NewRoutesV2StorageTypeOutputDetailResponse instantiates a new RoutesV2StorageTypeOutputDetailResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2StorageTypeOutputDetailResponseWithDefaults

`func NewRoutesV2StorageTypeOutputDetailResponseWithDefaults() *RoutesV2StorageTypeOutputDetailResponse`

NewRoutesV2StorageTypeOutputDetailResponseWithDefaults instantiates a new RoutesV2StorageTypeOutputDetailResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaselineMethod

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetBaselineMethod() string`

GetBaselineMethod returns the BaselineMethod field if non-nil, zero value otherwise.

### GetBaselineMethodOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetBaselineMethodOk() (*string, bool)`

GetBaselineMethodOk returns a tuple with the BaselineMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaselineMethod

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetBaselineMethod(v string)`

SetBaselineMethod sets BaselineMethod field to given value.

### HasBaselineMethod

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasBaselineMethod() bool`

HasBaselineMethod returns a boolean if a field has been set.

### GetCostPerGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetCostPerGb() float32`

GetCostPerGb returns the CostPerGb field if non-nil, zero value otherwise.

### GetCostPerGbOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetCostPerGbOk() (*float32, bool)`

GetCostPerGbOk returns a tuple with the CostPerGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostPerGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetCostPerGb(v float32)`

SetCostPerGb sets CostPerGb field to given value.

### HasCostPerGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasCostPerGb() bool`

HasCostPerGb returns a boolean if a field has been set.

### GetEgressBytes

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetEgressBytes() int32`

GetEgressBytes returns the EgressBytes field if non-nil, zero value otherwise.

### GetEgressBytesOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetEgressBytesOk() (*int32, bool)`

GetEgressBytesOk returns a tuple with the EgressBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgressBytes

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetEgressBytes(v int32)`

SetEgressBytes sets EgressBytes field to given value.

### HasEgressBytes

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasEgressBytes() bool`

HasEgressBytes returns a boolean if a field has been set.

### GetEgressGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetEgressGb() float32`

GetEgressGb returns the EgressGb field if non-nil, zero value otherwise.

### GetEgressGbOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetEgressGbOk() (*float32, bool)`

GetEgressGbOk returns a tuple with the EgressGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgressGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetEgressGb(v float32)`

SetEgressGb sets EgressGb field to given value.

### HasEgressGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasEgressGb() bool`

HasEgressGb returns a boolean if a field has been set.

### GetHasOwnPrice

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetHasOwnPrice() bool`

GetHasOwnPrice returns the HasOwnPrice field if non-nil, zero value otherwise.

### GetHasOwnPriceOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetHasOwnPriceOk() (*bool, bool)`

GetHasOwnPriceOk returns a tuple with the HasOwnPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasOwnPrice

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetHasOwnPrice(v bool)`

SetHasOwnPrice sets HasOwnPrice field to given value.

### HasHasOwnPrice

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasHasOwnPrice() bool`

HasHasOwnPrice returns a boolean if a field has been set.

### GetIngressBytes

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetIngressBytes() int32`

GetIngressBytes returns the IngressBytes field if non-nil, zero value otherwise.

### GetIngressBytesOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetIngressBytesOk() (*int32, bool)`

GetIngressBytesOk returns a tuple with the IngressBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngressBytes

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetIngressBytes(v int32)`

SetIngressBytes sets IngressBytes field to given value.

### HasIngressBytes

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasIngressBytes() bool`

HasIngressBytes returns a boolean if a field has been set.

### GetIngressGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetIngressGb() float32`

GetIngressGb returns the IngressGb field if non-nil, zero value otherwise.

### GetIngressGbOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetIngressGbOk() (*float32, bool)`

GetIngressGbOk returns a tuple with the IngressGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngressGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetIngressGb(v float32)`

SetIngressGb sets IngressGb field to given value.

### HasIngressGb

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasIngressGb() bool`

HasIngressGb returns a boolean if a field has been set.

### GetInputId

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetInputId() string`

GetInputId returns the InputId field if non-nil, zero value otherwise.

### GetInputIdOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetInputIdOk() (*string, bool)`

GetInputIdOk returns a tuple with the InputId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputId

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetInputId(v string)`

SetInputId sets InputId field to given value.

### HasInputId

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasInputId() bool`

HasInputId returns a boolean if a field has been set.

### GetNodeId

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetNodeId() string`

GetNodeId returns the NodeId field if non-nil, zero value otherwise.

### GetNodeIdOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetNodeIdOk() (*string, bool)`

GetNodeIdOk returns a tuple with the NodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeId

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetNodeId(v string)`

SetNodeId sets NodeId field to given value.

### HasNodeId

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasNodeId() bool`

HasNodeId returns a boolean if a field has been set.

### GetOutputDeleted

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetOutputDeleted() bool`

GetOutputDeleted returns the OutputDeleted field if non-nil, zero value otherwise.

### GetOutputDeletedOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetOutputDeletedOk() (*bool, bool)`

GetOutputDeletedOk returns a tuple with the OutputDeleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputDeleted

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetOutputDeleted(v bool)`

SetOutputDeleted sets OutputDeleted field to given value.

### HasOutputDeleted

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasOutputDeleted() bool`

HasOutputDeleted returns a boolean if a field has been set.

### GetOutputId

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetOutputId() string`

GetOutputId returns the OutputId field if non-nil, zero value otherwise.

### GetOutputIdOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetOutputIdOk() (*string, bool)`

GetOutputIdOk returns a tuple with the OutputId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputId

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetOutputId(v string)`

SetOutputId sets OutputId field to given value.

### HasOutputId

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasOutputId() bool`

HasOutputId returns a boolean if a field has been set.

### GetOutputName

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetOutputName() string`

GetOutputName returns the OutputName field if non-nil, zero value otherwise.

### GetOutputNameOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetOutputNameOk() (*string, bool)`

GetOutputNameOk returns a tuple with the OutputName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputName

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetOutputName(v string)`

SetOutputName sets OutputName field to given value.

### HasOutputName

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasOutputName() bool`

HasOutputName returns a boolean if a field has been set.

### GetPipelineId

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetPipelineId() string`

GetPipelineId returns the PipelineId field if non-nil, zero value otherwise.

### GetPipelineIdOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetPipelineIdOk() (*string, bool)`

GetPipelineIdOk returns a tuple with the PipelineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineId

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetPipelineId(v string)`

SetPipelineId sets PipelineId field to given value.

### HasPipelineId

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasPipelineId() bool`

HasPipelineId returns a boolean if a field has been set.

### GetStorageType

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetStorageType() string`

GetStorageType returns the StorageType field if non-nil, zero value otherwise.

### GetStorageTypeOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetStorageTypeOk() (*string, bool)`

GetStorageTypeOk returns a tuple with the StorageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageType

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetStorageType(v string)`

SetStorageType sets StorageType field to given value.

### HasStorageType

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasStorageType() bool`

HasStorageType returns a boolean if a field has been set.

### GetTotalCost

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetTotalCost() float32`

GetTotalCost returns the TotalCost field if non-nil, zero value otherwise.

### GetTotalCostOk

`func (o *RoutesV2StorageTypeOutputDetailResponse) GetTotalCostOk() (*float32, bool)`

GetTotalCostOk returns a tuple with the TotalCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCost

`func (o *RoutesV2StorageTypeOutputDetailResponse) SetTotalCost(v float32)`

SetTotalCost sets TotalCost field to given value.

### HasTotalCost

`func (o *RoutesV2StorageTypeOutputDetailResponse) HasTotalCost() bool`

HasTotalCost returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


