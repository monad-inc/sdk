# ModelsStorageTypeCostSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalOrgCostPostFilter** | Pointer to **float32** |  | [optional] 
**TotalOrgCostPreFilter** | Pointer to **float32** |  | [optional] 
**TotalOrgIngestBytes** | Pointer to **int32** |  | [optional] 
**TotalOrgIngestGb** | Pointer to **float32** |  | [optional] 
**TotalOrgOutputStorageBytes** | Pointer to **int32** |  | [optional] 
**TotalOrgOutputStorageGb** | Pointer to **float32** |  | [optional] 
**TotalOrgRoutingDroppedBytes** | Pointer to **int32** | Bytes that reached a routing fan-out and matched none of its edges. They were dropped silently — no output ever saw them — so they are counted in no output&#39;s baseline and reported here on their own, where a misrouted pipeline shows up. | [optional] 
**TotalOrgRoutingDroppedGb** | Pointer to **float32** |  | [optional] 

## Methods

### NewModelsStorageTypeCostSummary

`func NewModelsStorageTypeCostSummary() *ModelsStorageTypeCostSummary`

NewModelsStorageTypeCostSummary instantiates a new ModelsStorageTypeCostSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsStorageTypeCostSummaryWithDefaults

`func NewModelsStorageTypeCostSummaryWithDefaults() *ModelsStorageTypeCostSummary`

NewModelsStorageTypeCostSummaryWithDefaults instantiates a new ModelsStorageTypeCostSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalOrgCostPostFilter

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgCostPostFilter() float32`

GetTotalOrgCostPostFilter returns the TotalOrgCostPostFilter field if non-nil, zero value otherwise.

### GetTotalOrgCostPostFilterOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgCostPostFilterOk() (*float32, bool)`

GetTotalOrgCostPostFilterOk returns a tuple with the TotalOrgCostPostFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgCostPostFilter

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgCostPostFilter(v float32)`

SetTotalOrgCostPostFilter sets TotalOrgCostPostFilter field to given value.

### HasTotalOrgCostPostFilter

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgCostPostFilter() bool`

HasTotalOrgCostPostFilter returns a boolean if a field has been set.

### GetTotalOrgCostPreFilter

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgCostPreFilter() float32`

GetTotalOrgCostPreFilter returns the TotalOrgCostPreFilter field if non-nil, zero value otherwise.

### GetTotalOrgCostPreFilterOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgCostPreFilterOk() (*float32, bool)`

GetTotalOrgCostPreFilterOk returns a tuple with the TotalOrgCostPreFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgCostPreFilter

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgCostPreFilter(v float32)`

SetTotalOrgCostPreFilter sets TotalOrgCostPreFilter field to given value.

### HasTotalOrgCostPreFilter

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgCostPreFilter() bool`

HasTotalOrgCostPreFilter returns a boolean if a field has been set.

### GetTotalOrgIngestBytes

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgIngestBytes() int32`

GetTotalOrgIngestBytes returns the TotalOrgIngestBytes field if non-nil, zero value otherwise.

### GetTotalOrgIngestBytesOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgIngestBytesOk() (*int32, bool)`

GetTotalOrgIngestBytesOk returns a tuple with the TotalOrgIngestBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgIngestBytes

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgIngestBytes(v int32)`

SetTotalOrgIngestBytes sets TotalOrgIngestBytes field to given value.

### HasTotalOrgIngestBytes

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgIngestBytes() bool`

HasTotalOrgIngestBytes returns a boolean if a field has been set.

### GetTotalOrgIngestGb

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgIngestGb() float32`

GetTotalOrgIngestGb returns the TotalOrgIngestGb field if non-nil, zero value otherwise.

### GetTotalOrgIngestGbOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgIngestGbOk() (*float32, bool)`

GetTotalOrgIngestGbOk returns a tuple with the TotalOrgIngestGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgIngestGb

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgIngestGb(v float32)`

SetTotalOrgIngestGb sets TotalOrgIngestGb field to given value.

### HasTotalOrgIngestGb

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgIngestGb() bool`

HasTotalOrgIngestGb returns a boolean if a field has been set.

### GetTotalOrgOutputStorageBytes

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgOutputStorageBytes() int32`

GetTotalOrgOutputStorageBytes returns the TotalOrgOutputStorageBytes field if non-nil, zero value otherwise.

### GetTotalOrgOutputStorageBytesOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgOutputStorageBytesOk() (*int32, bool)`

GetTotalOrgOutputStorageBytesOk returns a tuple with the TotalOrgOutputStorageBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgOutputStorageBytes

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgOutputStorageBytes(v int32)`

SetTotalOrgOutputStorageBytes sets TotalOrgOutputStorageBytes field to given value.

### HasTotalOrgOutputStorageBytes

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgOutputStorageBytes() bool`

HasTotalOrgOutputStorageBytes returns a boolean if a field has been set.

### GetTotalOrgOutputStorageGb

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgOutputStorageGb() float32`

GetTotalOrgOutputStorageGb returns the TotalOrgOutputStorageGb field if non-nil, zero value otherwise.

### GetTotalOrgOutputStorageGbOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgOutputStorageGbOk() (*float32, bool)`

GetTotalOrgOutputStorageGbOk returns a tuple with the TotalOrgOutputStorageGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgOutputStorageGb

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgOutputStorageGb(v float32)`

SetTotalOrgOutputStorageGb sets TotalOrgOutputStorageGb field to given value.

### HasTotalOrgOutputStorageGb

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgOutputStorageGb() bool`

HasTotalOrgOutputStorageGb returns a boolean if a field has been set.

### GetTotalOrgRoutingDroppedBytes

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgRoutingDroppedBytes() int32`

GetTotalOrgRoutingDroppedBytes returns the TotalOrgRoutingDroppedBytes field if non-nil, zero value otherwise.

### GetTotalOrgRoutingDroppedBytesOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgRoutingDroppedBytesOk() (*int32, bool)`

GetTotalOrgRoutingDroppedBytesOk returns a tuple with the TotalOrgRoutingDroppedBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgRoutingDroppedBytes

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgRoutingDroppedBytes(v int32)`

SetTotalOrgRoutingDroppedBytes sets TotalOrgRoutingDroppedBytes field to given value.

### HasTotalOrgRoutingDroppedBytes

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgRoutingDroppedBytes() bool`

HasTotalOrgRoutingDroppedBytes returns a boolean if a field has been set.

### GetTotalOrgRoutingDroppedGb

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgRoutingDroppedGb() float32`

GetTotalOrgRoutingDroppedGb returns the TotalOrgRoutingDroppedGb field if non-nil, zero value otherwise.

### GetTotalOrgRoutingDroppedGbOk

`func (o *ModelsStorageTypeCostSummary) GetTotalOrgRoutingDroppedGbOk() (*float32, bool)`

GetTotalOrgRoutingDroppedGbOk returns a tuple with the TotalOrgRoutingDroppedGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrgRoutingDroppedGb

`func (o *ModelsStorageTypeCostSummary) SetTotalOrgRoutingDroppedGb(v float32)`

SetTotalOrgRoutingDroppedGb sets TotalOrgRoutingDroppedGb field to given value.

### HasTotalOrgRoutingDroppedGb

`func (o *ModelsStorageTypeCostSummary) HasTotalOrgRoutingDroppedGb() bool`

HasTotalOrgRoutingDroppedGb returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


