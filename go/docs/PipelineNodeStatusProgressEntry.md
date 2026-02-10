# PipelineNodeStatusProgressEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Label** | Pointer to **string** | Label is an optional descriptor that is human-readable and can be displayed in the UI It should mainly be used to contain the field name/path that is used to extract timestamp for a given inputs data | [optional] 
**PartitionKey** | Pointer to **string** | PartitionKey is an optional identifier for multi-entity inputs (e.g., \&quot;detector-123\&quot;, \&quot;us-east-1\&quot;) In a case where we store multiple state timestamps for a singular input we would use this field as a differentiator | [optional] 
**Ranges** | Pointer to [**[]PipelineNodeStatusTimeRange**](PipelineNodeStatusTimeRange.md) | Ranges represents the time ranges that have been read by an input node. Each range is a tuple of (start, end) timestamps indicating what data has been processed. Multiple ranges allow tracking non-contiguous data reads. | [optional] 

## Methods

### NewPipelineNodeStatusProgressEntry

`func NewPipelineNodeStatusProgressEntry() *PipelineNodeStatusProgressEntry`

NewPipelineNodeStatusProgressEntry instantiates a new PipelineNodeStatusProgressEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPipelineNodeStatusProgressEntryWithDefaults

`func NewPipelineNodeStatusProgressEntryWithDefaults() *PipelineNodeStatusProgressEntry`

NewPipelineNodeStatusProgressEntryWithDefaults instantiates a new PipelineNodeStatusProgressEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLabel

`func (o *PipelineNodeStatusProgressEntry) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *PipelineNodeStatusProgressEntry) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *PipelineNodeStatusProgressEntry) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *PipelineNodeStatusProgressEntry) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetPartitionKey

`func (o *PipelineNodeStatusProgressEntry) GetPartitionKey() string`

GetPartitionKey returns the PartitionKey field if non-nil, zero value otherwise.

### GetPartitionKeyOk

`func (o *PipelineNodeStatusProgressEntry) GetPartitionKeyOk() (*string, bool)`

GetPartitionKeyOk returns a tuple with the PartitionKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionKey

`func (o *PipelineNodeStatusProgressEntry) SetPartitionKey(v string)`

SetPartitionKey sets PartitionKey field to given value.

### HasPartitionKey

`func (o *PipelineNodeStatusProgressEntry) HasPartitionKey() bool`

HasPartitionKey returns a boolean if a field has been set.

### GetRanges

`func (o *PipelineNodeStatusProgressEntry) GetRanges() []PipelineNodeStatusTimeRange`

GetRanges returns the Ranges field if non-nil, zero value otherwise.

### GetRangesOk

`func (o *PipelineNodeStatusProgressEntry) GetRangesOk() (*[]PipelineNodeStatusTimeRange, bool)`

GetRangesOk returns a tuple with the Ranges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRanges

`func (o *PipelineNodeStatusProgressEntry) SetRanges(v []PipelineNodeStatusTimeRange)`

SetRanges sets Ranges field to given value.

### HasRanges

`func (o *PipelineNodeStatusProgressEntry) HasRanges() bool`

HasRanges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


