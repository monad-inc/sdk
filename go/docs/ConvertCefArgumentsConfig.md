# ConvertCefArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Columns** | Pointer to **map[string]string** | Custom CEF-key -&gt; output-column map; entries override the preset. | [optional] 
**ContinuationMarker** | Pointer to **string** | Collector continuation marker, e.g. \&quot;#LF#\&quot; or \&quot;#012\&quot;; \&quot;\&quot; disables continuation handling. | [optional] 
**ContinuationMode** | Pointer to **string** | \&quot;spill\&quot; (default), \&quot;keep\&quot;, or \&quot;newline\&quot;. | [optional] 
**Dialect** | Pointer to **string** | \&quot;cef\&quot; (spec-faithful, default) or \&quot;legacy_kv\&quot; (bug-compat with jq CEF parsers). | [optional] 
**EmptyToNull** | Pointer to **bool** | Write empty-string values as null. Default false. | [optional] 
**Envelope** | Pointer to **map[string]string** | Output field -&gt; record path (JSONPath), copied verbatim; missing -&gt; null. | [optional] 
**HeaderFields** | Pointer to **[]string** | Exactly 7 output names for the header slots; default per preset. | [optional] 
**IsoDateColumns** | Pointer to **[]string** | Output columns rewritten \&quot;YYYY/MM/DD HH:MM:SS\&quot; -&gt; \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;. | [optional] 
**Key** | Pointer to **string** | Source key holding the CEF line (JSONPath). Default \&quot;message\&quot;. | [optional] 
**NumericColumns** | Pointer to **[]string** | Output columns coerced to number (invalid -&gt; null); unset &#x3D; preset default, [] &#x3D; off. | [optional] 
**OutputKey** | Pointer to **string** | Target key when output_mode is \&quot;under_key\&quot;. | [optional] 
**OutputMode** | Pointer to **string** | \&quot;replace\&quot; (default), \&quot;merge\&quot;, or \&quot;under_key\&quot;. | [optional] 
**OverflowField** | Pointer to **string** | Unmapped keys joined into this field; \&quot;\&quot; emits unmapped keys as individual fields. | [optional] 
**OverflowSeparator** | Pointer to **string** | Separator between overflow entries. Default \&quot;;\&quot;. | [optional] 
**Preset** | Pointer to **string** | \&quot;\&quot; (none), \&quot;cef_full_names\&quot;, or \&quot;common_security_log\&quot;. | [optional] 
**ResolveLabels** | Pointer to **bool** | Promote csN/csNLabel-style pairs into fields named by the label. Default false. | [optional] 
**Strict** | Pointer to **bool** | Fail the record on structural problems instead of best-effort parsing. Default false. | [optional] 
**StripQuotes** | Pointer to **bool** | Remove one leading+trailing double-quote from values that carry both. Default false. | [optional] 
**WarningsKey** | Pointer to **string** | Write parse warnings as a string array under this key; \&quot;\&quot; (default) omits them. | [optional] 

## Methods

### NewConvertCefArgumentsConfig

`func NewConvertCefArgumentsConfig() *ConvertCefArgumentsConfig`

NewConvertCefArgumentsConfig instantiates a new ConvertCefArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertCefArgumentsConfigWithDefaults

`func NewConvertCefArgumentsConfigWithDefaults() *ConvertCefArgumentsConfig`

NewConvertCefArgumentsConfigWithDefaults instantiates a new ConvertCefArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumns

`func (o *ConvertCefArgumentsConfig) GetColumns() map[string]string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *ConvertCefArgumentsConfig) GetColumnsOk() (*map[string]string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *ConvertCefArgumentsConfig) SetColumns(v map[string]string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *ConvertCefArgumentsConfig) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetContinuationMarker

`func (o *ConvertCefArgumentsConfig) GetContinuationMarker() string`

GetContinuationMarker returns the ContinuationMarker field if non-nil, zero value otherwise.

### GetContinuationMarkerOk

`func (o *ConvertCefArgumentsConfig) GetContinuationMarkerOk() (*string, bool)`

GetContinuationMarkerOk returns a tuple with the ContinuationMarker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinuationMarker

`func (o *ConvertCefArgumentsConfig) SetContinuationMarker(v string)`

SetContinuationMarker sets ContinuationMarker field to given value.

### HasContinuationMarker

`func (o *ConvertCefArgumentsConfig) HasContinuationMarker() bool`

HasContinuationMarker returns a boolean if a field has been set.

### GetContinuationMode

`func (o *ConvertCefArgumentsConfig) GetContinuationMode() string`

GetContinuationMode returns the ContinuationMode field if non-nil, zero value otherwise.

### GetContinuationModeOk

`func (o *ConvertCefArgumentsConfig) GetContinuationModeOk() (*string, bool)`

GetContinuationModeOk returns a tuple with the ContinuationMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinuationMode

`func (o *ConvertCefArgumentsConfig) SetContinuationMode(v string)`

SetContinuationMode sets ContinuationMode field to given value.

### HasContinuationMode

`func (o *ConvertCefArgumentsConfig) HasContinuationMode() bool`

HasContinuationMode returns a boolean if a field has been set.

### GetDialect

`func (o *ConvertCefArgumentsConfig) GetDialect() string`

GetDialect returns the Dialect field if non-nil, zero value otherwise.

### GetDialectOk

`func (o *ConvertCefArgumentsConfig) GetDialectOk() (*string, bool)`

GetDialectOk returns a tuple with the Dialect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDialect

`func (o *ConvertCefArgumentsConfig) SetDialect(v string)`

SetDialect sets Dialect field to given value.

### HasDialect

`func (o *ConvertCefArgumentsConfig) HasDialect() bool`

HasDialect returns a boolean if a field has been set.

### GetEmptyToNull

`func (o *ConvertCefArgumentsConfig) GetEmptyToNull() bool`

GetEmptyToNull returns the EmptyToNull field if non-nil, zero value otherwise.

### GetEmptyToNullOk

`func (o *ConvertCefArgumentsConfig) GetEmptyToNullOk() (*bool, bool)`

GetEmptyToNullOk returns a tuple with the EmptyToNull field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmptyToNull

`func (o *ConvertCefArgumentsConfig) SetEmptyToNull(v bool)`

SetEmptyToNull sets EmptyToNull field to given value.

### HasEmptyToNull

`func (o *ConvertCefArgumentsConfig) HasEmptyToNull() bool`

HasEmptyToNull returns a boolean if a field has been set.

### GetEnvelope

`func (o *ConvertCefArgumentsConfig) GetEnvelope() map[string]string`

GetEnvelope returns the Envelope field if non-nil, zero value otherwise.

### GetEnvelopeOk

`func (o *ConvertCefArgumentsConfig) GetEnvelopeOk() (*map[string]string, bool)`

GetEnvelopeOk returns a tuple with the Envelope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvelope

`func (o *ConvertCefArgumentsConfig) SetEnvelope(v map[string]string)`

SetEnvelope sets Envelope field to given value.

### HasEnvelope

`func (o *ConvertCefArgumentsConfig) HasEnvelope() bool`

HasEnvelope returns a boolean if a field has been set.

### GetHeaderFields

`func (o *ConvertCefArgumentsConfig) GetHeaderFields() []string`

GetHeaderFields returns the HeaderFields field if non-nil, zero value otherwise.

### GetHeaderFieldsOk

`func (o *ConvertCefArgumentsConfig) GetHeaderFieldsOk() (*[]string, bool)`

GetHeaderFieldsOk returns a tuple with the HeaderFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaderFields

`func (o *ConvertCefArgumentsConfig) SetHeaderFields(v []string)`

SetHeaderFields sets HeaderFields field to given value.

### HasHeaderFields

`func (o *ConvertCefArgumentsConfig) HasHeaderFields() bool`

HasHeaderFields returns a boolean if a field has been set.

### GetIsoDateColumns

`func (o *ConvertCefArgumentsConfig) GetIsoDateColumns() []string`

GetIsoDateColumns returns the IsoDateColumns field if non-nil, zero value otherwise.

### GetIsoDateColumnsOk

`func (o *ConvertCefArgumentsConfig) GetIsoDateColumnsOk() (*[]string, bool)`

GetIsoDateColumnsOk returns a tuple with the IsoDateColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoDateColumns

`func (o *ConvertCefArgumentsConfig) SetIsoDateColumns(v []string)`

SetIsoDateColumns sets IsoDateColumns field to given value.

### HasIsoDateColumns

`func (o *ConvertCefArgumentsConfig) HasIsoDateColumns() bool`

HasIsoDateColumns returns a boolean if a field has been set.

### GetKey

`func (o *ConvertCefArgumentsConfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *ConvertCefArgumentsConfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *ConvertCefArgumentsConfig) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *ConvertCefArgumentsConfig) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetNumericColumns

`func (o *ConvertCefArgumentsConfig) GetNumericColumns() []string`

GetNumericColumns returns the NumericColumns field if non-nil, zero value otherwise.

### GetNumericColumnsOk

`func (o *ConvertCefArgumentsConfig) GetNumericColumnsOk() (*[]string, bool)`

GetNumericColumnsOk returns a tuple with the NumericColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumericColumns

`func (o *ConvertCefArgumentsConfig) SetNumericColumns(v []string)`

SetNumericColumns sets NumericColumns field to given value.

### HasNumericColumns

`func (o *ConvertCefArgumentsConfig) HasNumericColumns() bool`

HasNumericColumns returns a boolean if a field has been set.

### GetOutputKey

`func (o *ConvertCefArgumentsConfig) GetOutputKey() string`

GetOutputKey returns the OutputKey field if non-nil, zero value otherwise.

### GetOutputKeyOk

`func (o *ConvertCefArgumentsConfig) GetOutputKeyOk() (*string, bool)`

GetOutputKeyOk returns a tuple with the OutputKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputKey

`func (o *ConvertCefArgumentsConfig) SetOutputKey(v string)`

SetOutputKey sets OutputKey field to given value.

### HasOutputKey

`func (o *ConvertCefArgumentsConfig) HasOutputKey() bool`

HasOutputKey returns a boolean if a field has been set.

### GetOutputMode

`func (o *ConvertCefArgumentsConfig) GetOutputMode() string`

GetOutputMode returns the OutputMode field if non-nil, zero value otherwise.

### GetOutputModeOk

`func (o *ConvertCefArgumentsConfig) GetOutputModeOk() (*string, bool)`

GetOutputModeOk returns a tuple with the OutputMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputMode

`func (o *ConvertCefArgumentsConfig) SetOutputMode(v string)`

SetOutputMode sets OutputMode field to given value.

### HasOutputMode

`func (o *ConvertCefArgumentsConfig) HasOutputMode() bool`

HasOutputMode returns a boolean if a field has been set.

### GetOverflowField

`func (o *ConvertCefArgumentsConfig) GetOverflowField() string`

GetOverflowField returns the OverflowField field if non-nil, zero value otherwise.

### GetOverflowFieldOk

`func (o *ConvertCefArgumentsConfig) GetOverflowFieldOk() (*string, bool)`

GetOverflowFieldOk returns a tuple with the OverflowField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverflowField

`func (o *ConvertCefArgumentsConfig) SetOverflowField(v string)`

SetOverflowField sets OverflowField field to given value.

### HasOverflowField

`func (o *ConvertCefArgumentsConfig) HasOverflowField() bool`

HasOverflowField returns a boolean if a field has been set.

### GetOverflowSeparator

`func (o *ConvertCefArgumentsConfig) GetOverflowSeparator() string`

GetOverflowSeparator returns the OverflowSeparator field if non-nil, zero value otherwise.

### GetOverflowSeparatorOk

`func (o *ConvertCefArgumentsConfig) GetOverflowSeparatorOk() (*string, bool)`

GetOverflowSeparatorOk returns a tuple with the OverflowSeparator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverflowSeparator

`func (o *ConvertCefArgumentsConfig) SetOverflowSeparator(v string)`

SetOverflowSeparator sets OverflowSeparator field to given value.

### HasOverflowSeparator

`func (o *ConvertCefArgumentsConfig) HasOverflowSeparator() bool`

HasOverflowSeparator returns a boolean if a field has been set.

### GetPreset

`func (o *ConvertCefArgumentsConfig) GetPreset() string`

GetPreset returns the Preset field if non-nil, zero value otherwise.

### GetPresetOk

`func (o *ConvertCefArgumentsConfig) GetPresetOk() (*string, bool)`

GetPresetOk returns a tuple with the Preset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreset

`func (o *ConvertCefArgumentsConfig) SetPreset(v string)`

SetPreset sets Preset field to given value.

### HasPreset

`func (o *ConvertCefArgumentsConfig) HasPreset() bool`

HasPreset returns a boolean if a field has been set.

### GetResolveLabels

`func (o *ConvertCefArgumentsConfig) GetResolveLabels() bool`

GetResolveLabels returns the ResolveLabels field if non-nil, zero value otherwise.

### GetResolveLabelsOk

`func (o *ConvertCefArgumentsConfig) GetResolveLabelsOk() (*bool, bool)`

GetResolveLabelsOk returns a tuple with the ResolveLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveLabels

`func (o *ConvertCefArgumentsConfig) SetResolveLabels(v bool)`

SetResolveLabels sets ResolveLabels field to given value.

### HasResolveLabels

`func (o *ConvertCefArgumentsConfig) HasResolveLabels() bool`

HasResolveLabels returns a boolean if a field has been set.

### GetStrict

`func (o *ConvertCefArgumentsConfig) GetStrict() bool`

GetStrict returns the Strict field if non-nil, zero value otherwise.

### GetStrictOk

`func (o *ConvertCefArgumentsConfig) GetStrictOk() (*bool, bool)`

GetStrictOk returns a tuple with the Strict field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrict

`func (o *ConvertCefArgumentsConfig) SetStrict(v bool)`

SetStrict sets Strict field to given value.

### HasStrict

`func (o *ConvertCefArgumentsConfig) HasStrict() bool`

HasStrict returns a boolean if a field has been set.

### GetStripQuotes

`func (o *ConvertCefArgumentsConfig) GetStripQuotes() bool`

GetStripQuotes returns the StripQuotes field if non-nil, zero value otherwise.

### GetStripQuotesOk

`func (o *ConvertCefArgumentsConfig) GetStripQuotesOk() (*bool, bool)`

GetStripQuotesOk returns a tuple with the StripQuotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStripQuotes

`func (o *ConvertCefArgumentsConfig) SetStripQuotes(v bool)`

SetStripQuotes sets StripQuotes field to given value.

### HasStripQuotes

`func (o *ConvertCefArgumentsConfig) HasStripQuotes() bool`

HasStripQuotes returns a boolean if a field has been set.

### GetWarningsKey

`func (o *ConvertCefArgumentsConfig) GetWarningsKey() string`

GetWarningsKey returns the WarningsKey field if non-nil, zero value otherwise.

### GetWarningsKeyOk

`func (o *ConvertCefArgumentsConfig) GetWarningsKeyOk() (*string, bool)`

GetWarningsKeyOk returns a tuple with the WarningsKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarningsKey

`func (o *ConvertCefArgumentsConfig) SetWarningsKey(v string)`

SetWarningsKey sets WarningsKey field to given value.

### HasWarningsKey

`func (o *ConvertCefArgumentsConfig) HasWarningsKey() bool`

HasWarningsKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


