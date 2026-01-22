# ModelsStorageTypeOutputDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CostId** | Pointer to **string** |  | [optional] 
**CostPerByte** | Pointer to **float32** |  | [optional] 
**CostPerGb** | Pointer to **float32** |  | [optional] 
**EgressBytes** | Pointer to **int32** |  | [optional] 
**EgressBytesGb** | Pointer to **float32** |  | [optional] 
**NumPipelines** | Pointer to **int32** |  | [optional] 
**PreFilterBytes** | Pointer to **int32** |  | [optional] 
**PreFilterBytesGb** | Pointer to **float32** |  | [optional] 
**TotalCostPostFilter** | Pointer to **float32** |  | [optional] 
**TotalCostPreFilter** | Pointer to **float32** |  | [optional] 

## Methods

### NewModelsStorageTypeOutputDetail

`func NewModelsStorageTypeOutputDetail() *ModelsStorageTypeOutputDetail`

NewModelsStorageTypeOutputDetail instantiates a new ModelsStorageTypeOutputDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsStorageTypeOutputDetailWithDefaults

`func NewModelsStorageTypeOutputDetailWithDefaults() *ModelsStorageTypeOutputDetail`

NewModelsStorageTypeOutputDetailWithDefaults instantiates a new ModelsStorageTypeOutputDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCostId

`func (o *ModelsStorageTypeOutputDetail) GetCostId() string`

GetCostId returns the CostId field if non-nil, zero value otherwise.

### GetCostIdOk

`func (o *ModelsStorageTypeOutputDetail) GetCostIdOk() (*string, bool)`

GetCostIdOk returns a tuple with the CostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostId

`func (o *ModelsStorageTypeOutputDetail) SetCostId(v string)`

SetCostId sets CostId field to given value.

### HasCostId

`func (o *ModelsStorageTypeOutputDetail) HasCostId() bool`

HasCostId returns a boolean if a field has been set.

### GetCostPerByte

`func (o *ModelsStorageTypeOutputDetail) GetCostPerByte() float32`

GetCostPerByte returns the CostPerByte field if non-nil, zero value otherwise.

### GetCostPerByteOk

`func (o *ModelsStorageTypeOutputDetail) GetCostPerByteOk() (*float32, bool)`

GetCostPerByteOk returns a tuple with the CostPerByte field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostPerByte

`func (o *ModelsStorageTypeOutputDetail) SetCostPerByte(v float32)`

SetCostPerByte sets CostPerByte field to given value.

### HasCostPerByte

`func (o *ModelsStorageTypeOutputDetail) HasCostPerByte() bool`

HasCostPerByte returns a boolean if a field has been set.

### GetCostPerGb

`func (o *ModelsStorageTypeOutputDetail) GetCostPerGb() float32`

GetCostPerGb returns the CostPerGb field if non-nil, zero value otherwise.

### GetCostPerGbOk

`func (o *ModelsStorageTypeOutputDetail) GetCostPerGbOk() (*float32, bool)`

GetCostPerGbOk returns a tuple with the CostPerGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostPerGb

`func (o *ModelsStorageTypeOutputDetail) SetCostPerGb(v float32)`

SetCostPerGb sets CostPerGb field to given value.

### HasCostPerGb

`func (o *ModelsStorageTypeOutputDetail) HasCostPerGb() bool`

HasCostPerGb returns a boolean if a field has been set.

### GetEgressBytes

`func (o *ModelsStorageTypeOutputDetail) GetEgressBytes() int32`

GetEgressBytes returns the EgressBytes field if non-nil, zero value otherwise.

### GetEgressBytesOk

`func (o *ModelsStorageTypeOutputDetail) GetEgressBytesOk() (*int32, bool)`

GetEgressBytesOk returns a tuple with the EgressBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgressBytes

`func (o *ModelsStorageTypeOutputDetail) SetEgressBytes(v int32)`

SetEgressBytes sets EgressBytes field to given value.

### HasEgressBytes

`func (o *ModelsStorageTypeOutputDetail) HasEgressBytes() bool`

HasEgressBytes returns a boolean if a field has been set.

### GetEgressBytesGb

`func (o *ModelsStorageTypeOutputDetail) GetEgressBytesGb() float32`

GetEgressBytesGb returns the EgressBytesGb field if non-nil, zero value otherwise.

### GetEgressBytesGbOk

`func (o *ModelsStorageTypeOutputDetail) GetEgressBytesGbOk() (*float32, bool)`

GetEgressBytesGbOk returns a tuple with the EgressBytesGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgressBytesGb

`func (o *ModelsStorageTypeOutputDetail) SetEgressBytesGb(v float32)`

SetEgressBytesGb sets EgressBytesGb field to given value.

### HasEgressBytesGb

`func (o *ModelsStorageTypeOutputDetail) HasEgressBytesGb() bool`

HasEgressBytesGb returns a boolean if a field has been set.

### GetNumPipelines

`func (o *ModelsStorageTypeOutputDetail) GetNumPipelines() int32`

GetNumPipelines returns the NumPipelines field if non-nil, zero value otherwise.

### GetNumPipelinesOk

`func (o *ModelsStorageTypeOutputDetail) GetNumPipelinesOk() (*int32, bool)`

GetNumPipelinesOk returns a tuple with the NumPipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumPipelines

`func (o *ModelsStorageTypeOutputDetail) SetNumPipelines(v int32)`

SetNumPipelines sets NumPipelines field to given value.

### HasNumPipelines

`func (o *ModelsStorageTypeOutputDetail) HasNumPipelines() bool`

HasNumPipelines returns a boolean if a field has been set.

### GetPreFilterBytes

`func (o *ModelsStorageTypeOutputDetail) GetPreFilterBytes() int32`

GetPreFilterBytes returns the PreFilterBytes field if non-nil, zero value otherwise.

### GetPreFilterBytesOk

`func (o *ModelsStorageTypeOutputDetail) GetPreFilterBytesOk() (*int32, bool)`

GetPreFilterBytesOk returns a tuple with the PreFilterBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreFilterBytes

`func (o *ModelsStorageTypeOutputDetail) SetPreFilterBytes(v int32)`

SetPreFilterBytes sets PreFilterBytes field to given value.

### HasPreFilterBytes

`func (o *ModelsStorageTypeOutputDetail) HasPreFilterBytes() bool`

HasPreFilterBytes returns a boolean if a field has been set.

### GetPreFilterBytesGb

`func (o *ModelsStorageTypeOutputDetail) GetPreFilterBytesGb() float32`

GetPreFilterBytesGb returns the PreFilterBytesGb field if non-nil, zero value otherwise.

### GetPreFilterBytesGbOk

`func (o *ModelsStorageTypeOutputDetail) GetPreFilterBytesGbOk() (*float32, bool)`

GetPreFilterBytesGbOk returns a tuple with the PreFilterBytesGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreFilterBytesGb

`func (o *ModelsStorageTypeOutputDetail) SetPreFilterBytesGb(v float32)`

SetPreFilterBytesGb sets PreFilterBytesGb field to given value.

### HasPreFilterBytesGb

`func (o *ModelsStorageTypeOutputDetail) HasPreFilterBytesGb() bool`

HasPreFilterBytesGb returns a boolean if a field has been set.

### GetTotalCostPostFilter

`func (o *ModelsStorageTypeOutputDetail) GetTotalCostPostFilter() float32`

GetTotalCostPostFilter returns the TotalCostPostFilter field if non-nil, zero value otherwise.

### GetTotalCostPostFilterOk

`func (o *ModelsStorageTypeOutputDetail) GetTotalCostPostFilterOk() (*float32, bool)`

GetTotalCostPostFilterOk returns a tuple with the TotalCostPostFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCostPostFilter

`func (o *ModelsStorageTypeOutputDetail) SetTotalCostPostFilter(v float32)`

SetTotalCostPostFilter sets TotalCostPostFilter field to given value.

### HasTotalCostPostFilter

`func (o *ModelsStorageTypeOutputDetail) HasTotalCostPostFilter() bool`

HasTotalCostPostFilter returns a boolean if a field has been set.

### GetTotalCostPreFilter

`func (o *ModelsStorageTypeOutputDetail) GetTotalCostPreFilter() float32`

GetTotalCostPreFilter returns the TotalCostPreFilter field if non-nil, zero value otherwise.

### GetTotalCostPreFilterOk

`func (o *ModelsStorageTypeOutputDetail) GetTotalCostPreFilterOk() (*float32, bool)`

GetTotalCostPreFilterOk returns a tuple with the TotalCostPreFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCostPreFilter

`func (o *ModelsStorageTypeOutputDetail) SetTotalCostPreFilter(v float32)`

SetTotalCostPreFilter sets TotalCostPreFilter field to given value.

### HasTotalCostPreFilter

`func (o *ModelsStorageTypeOutputDetail) HasTotalCostPreFilter() bool`

HasTotalCostPreFilter returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


