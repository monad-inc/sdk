# RoutesTransformOperationArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key to store the timestamp in | [optional] 
**Value** | Pointer to **interface{}** |  | [optional] 
**Type** | Pointer to **string** | The new type of the key | [optional] 
**Columns** | Pointer to **map[string]string** | Custom CEF-key -&gt; output-column map; entries override the preset. | [optional] 
**ContinuationMarker** | Pointer to **string** | Collector continuation marker, e.g. \&quot;#LF#\&quot; or \&quot;#012\&quot;; \&quot;\&quot; disables continuation handling. | [optional] 
**ContinuationMode** | Pointer to **string** | \&quot;spill\&quot; (default), \&quot;keep\&quot;, or \&quot;newline\&quot;. | [optional] 
**Dialect** | Pointer to **string** | \&quot;cef\&quot; (spec-faithful, default) or \&quot;legacy_kv\&quot; (bug-compat with jq CEF parsers). | [optional] 
**EmptyToNull** | Pointer to **bool** | Write empty-string values as null. Default false. | [optional] 
**Envelope** | Pointer to **map[string]string** | Output field -&gt; record path (JSONPath), copied verbatim; missing -&gt; null. | [optional] 
**HeaderFields** | Pointer to **[]string** | Exactly 7 output names for the header slots; default per preset. | [optional] 
**IsoDateColumns** | Pointer to **[]string** | Output columns rewritten \&quot;YYYY/MM/DD HH:MM:SS\&quot; -&gt; \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;. | [optional] 
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
**SourceFormat** | Pointer to [**ConvertTimestampTimestampFormat**](ConvertTimestampTimestampFormat.md) |  | [optional] 
**SourceFormatCustom** | Pointer to **string** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**SourceKey** | Pointer to **string** | Required: JSONPath to source timestamp field | [optional] 
**SourceTimezone** | Pointer to **string** | Optional: Source timezone (default: UTC) | [optional] 
**TargetFormat** | Pointer to [**ConvertTimestampTimestampFormat**](ConvertTimestampTimestampFormat.md) |  | [optional] 
**TargetFormatCustom** | Pointer to **string** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**TargetKey** | Pointer to **string** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**TargetTimezone** | Pointer to **string** | Optional: Target timezone (default: UTC) | [optional] 
**KeyToWatch** | Pointer to **string** | The key to watch for | [optional] 
**ValueToWatch** | Pointer to **interface{}** |  | [optional] 
**NewKey** | Pointer to **string** | The new key to rename to | [optional] 
**Algorithm** | Pointer to [**EncryptAlgorithmConfig**](EncryptAlgorithmConfig.md) |  | [optional] 
**Delimiter** | Pointer to **string** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**PreventDataDropping** | Pointer to **bool** | PreventDataDropping errors instead of dropping the record when the query produces no output. Only applies when Key is unset, since storing the result under a key always emits a record. | [optional] 
**Query** | Pointer to **string** | The raw query string from config | [optional] 
**Mode** | Pointer to [**MaskModeConfig**](MaskModeConfig.md) |  | [optional] 
**ValueToSet** | Pointer to **interface{}** |  | [optional] 
**Format** | Pointer to [**UtcTimestampTimestampFormat**](UtcTimestampTimestampFormat.md) |  | [optional] 

## Methods

### NewRoutesTransformOperationArguments

`func NewRoutesTransformOperationArguments() *RoutesTransformOperationArguments`

NewRoutesTransformOperationArguments instantiates a new RoutesTransformOperationArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesTransformOperationArgumentsWithDefaults

`func NewRoutesTransformOperationArgumentsWithDefaults() *RoutesTransformOperationArguments`

NewRoutesTransformOperationArgumentsWithDefaults instantiates a new RoutesTransformOperationArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *RoutesTransformOperationArguments) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *RoutesTransformOperationArguments) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *RoutesTransformOperationArguments) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *RoutesTransformOperationArguments) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *RoutesTransformOperationArguments) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *RoutesTransformOperationArguments) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *RoutesTransformOperationArguments) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *RoutesTransformOperationArguments) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *RoutesTransformOperationArguments) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *RoutesTransformOperationArguments) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetType

`func (o *RoutesTransformOperationArguments) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesTransformOperationArguments) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesTransformOperationArguments) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesTransformOperationArguments) HasType() bool`

HasType returns a boolean if a field has been set.

### GetColumns

`func (o *RoutesTransformOperationArguments) GetColumns() map[string]string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *RoutesTransformOperationArguments) GetColumnsOk() (*map[string]string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *RoutesTransformOperationArguments) SetColumns(v map[string]string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *RoutesTransformOperationArguments) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetContinuationMarker

`func (o *RoutesTransformOperationArguments) GetContinuationMarker() string`

GetContinuationMarker returns the ContinuationMarker field if non-nil, zero value otherwise.

### GetContinuationMarkerOk

`func (o *RoutesTransformOperationArguments) GetContinuationMarkerOk() (*string, bool)`

GetContinuationMarkerOk returns a tuple with the ContinuationMarker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinuationMarker

`func (o *RoutesTransformOperationArguments) SetContinuationMarker(v string)`

SetContinuationMarker sets ContinuationMarker field to given value.

### HasContinuationMarker

`func (o *RoutesTransformOperationArguments) HasContinuationMarker() bool`

HasContinuationMarker returns a boolean if a field has been set.

### GetContinuationMode

`func (o *RoutesTransformOperationArguments) GetContinuationMode() string`

GetContinuationMode returns the ContinuationMode field if non-nil, zero value otherwise.

### GetContinuationModeOk

`func (o *RoutesTransformOperationArguments) GetContinuationModeOk() (*string, bool)`

GetContinuationModeOk returns a tuple with the ContinuationMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinuationMode

`func (o *RoutesTransformOperationArguments) SetContinuationMode(v string)`

SetContinuationMode sets ContinuationMode field to given value.

### HasContinuationMode

`func (o *RoutesTransformOperationArguments) HasContinuationMode() bool`

HasContinuationMode returns a boolean if a field has been set.

### GetDialect

`func (o *RoutesTransformOperationArguments) GetDialect() string`

GetDialect returns the Dialect field if non-nil, zero value otherwise.

### GetDialectOk

`func (o *RoutesTransformOperationArguments) GetDialectOk() (*string, bool)`

GetDialectOk returns a tuple with the Dialect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDialect

`func (o *RoutesTransformOperationArguments) SetDialect(v string)`

SetDialect sets Dialect field to given value.

### HasDialect

`func (o *RoutesTransformOperationArguments) HasDialect() bool`

HasDialect returns a boolean if a field has been set.

### GetEmptyToNull

`func (o *RoutesTransformOperationArguments) GetEmptyToNull() bool`

GetEmptyToNull returns the EmptyToNull field if non-nil, zero value otherwise.

### GetEmptyToNullOk

`func (o *RoutesTransformOperationArguments) GetEmptyToNullOk() (*bool, bool)`

GetEmptyToNullOk returns a tuple with the EmptyToNull field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmptyToNull

`func (o *RoutesTransformOperationArguments) SetEmptyToNull(v bool)`

SetEmptyToNull sets EmptyToNull field to given value.

### HasEmptyToNull

`func (o *RoutesTransformOperationArguments) HasEmptyToNull() bool`

HasEmptyToNull returns a boolean if a field has been set.

### GetEnvelope

`func (o *RoutesTransformOperationArguments) GetEnvelope() map[string]string`

GetEnvelope returns the Envelope field if non-nil, zero value otherwise.

### GetEnvelopeOk

`func (o *RoutesTransformOperationArguments) GetEnvelopeOk() (*map[string]string, bool)`

GetEnvelopeOk returns a tuple with the Envelope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvelope

`func (o *RoutesTransformOperationArguments) SetEnvelope(v map[string]string)`

SetEnvelope sets Envelope field to given value.

### HasEnvelope

`func (o *RoutesTransformOperationArguments) HasEnvelope() bool`

HasEnvelope returns a boolean if a field has been set.

### GetHeaderFields

`func (o *RoutesTransformOperationArguments) GetHeaderFields() []string`

GetHeaderFields returns the HeaderFields field if non-nil, zero value otherwise.

### GetHeaderFieldsOk

`func (o *RoutesTransformOperationArguments) GetHeaderFieldsOk() (*[]string, bool)`

GetHeaderFieldsOk returns a tuple with the HeaderFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaderFields

`func (o *RoutesTransformOperationArguments) SetHeaderFields(v []string)`

SetHeaderFields sets HeaderFields field to given value.

### HasHeaderFields

`func (o *RoutesTransformOperationArguments) HasHeaderFields() bool`

HasHeaderFields returns a boolean if a field has been set.

### GetIsoDateColumns

`func (o *RoutesTransformOperationArguments) GetIsoDateColumns() []string`

GetIsoDateColumns returns the IsoDateColumns field if non-nil, zero value otherwise.

### GetIsoDateColumnsOk

`func (o *RoutesTransformOperationArguments) GetIsoDateColumnsOk() (*[]string, bool)`

GetIsoDateColumnsOk returns a tuple with the IsoDateColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoDateColumns

`func (o *RoutesTransformOperationArguments) SetIsoDateColumns(v []string)`

SetIsoDateColumns sets IsoDateColumns field to given value.

### HasIsoDateColumns

`func (o *RoutesTransformOperationArguments) HasIsoDateColumns() bool`

HasIsoDateColumns returns a boolean if a field has been set.

### GetNumericColumns

`func (o *RoutesTransformOperationArguments) GetNumericColumns() []string`

GetNumericColumns returns the NumericColumns field if non-nil, zero value otherwise.

### GetNumericColumnsOk

`func (o *RoutesTransformOperationArguments) GetNumericColumnsOk() (*[]string, bool)`

GetNumericColumnsOk returns a tuple with the NumericColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumericColumns

`func (o *RoutesTransformOperationArguments) SetNumericColumns(v []string)`

SetNumericColumns sets NumericColumns field to given value.

### HasNumericColumns

`func (o *RoutesTransformOperationArguments) HasNumericColumns() bool`

HasNumericColumns returns a boolean if a field has been set.

### GetOutputKey

`func (o *RoutesTransformOperationArguments) GetOutputKey() string`

GetOutputKey returns the OutputKey field if non-nil, zero value otherwise.

### GetOutputKeyOk

`func (o *RoutesTransformOperationArguments) GetOutputKeyOk() (*string, bool)`

GetOutputKeyOk returns a tuple with the OutputKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputKey

`func (o *RoutesTransformOperationArguments) SetOutputKey(v string)`

SetOutputKey sets OutputKey field to given value.

### HasOutputKey

`func (o *RoutesTransformOperationArguments) HasOutputKey() bool`

HasOutputKey returns a boolean if a field has been set.

### GetOutputMode

`func (o *RoutesTransformOperationArguments) GetOutputMode() string`

GetOutputMode returns the OutputMode field if non-nil, zero value otherwise.

### GetOutputModeOk

`func (o *RoutesTransformOperationArguments) GetOutputModeOk() (*string, bool)`

GetOutputModeOk returns a tuple with the OutputMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputMode

`func (o *RoutesTransformOperationArguments) SetOutputMode(v string)`

SetOutputMode sets OutputMode field to given value.

### HasOutputMode

`func (o *RoutesTransformOperationArguments) HasOutputMode() bool`

HasOutputMode returns a boolean if a field has been set.

### GetOverflowField

`func (o *RoutesTransformOperationArguments) GetOverflowField() string`

GetOverflowField returns the OverflowField field if non-nil, zero value otherwise.

### GetOverflowFieldOk

`func (o *RoutesTransformOperationArguments) GetOverflowFieldOk() (*string, bool)`

GetOverflowFieldOk returns a tuple with the OverflowField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverflowField

`func (o *RoutesTransformOperationArguments) SetOverflowField(v string)`

SetOverflowField sets OverflowField field to given value.

### HasOverflowField

`func (o *RoutesTransformOperationArguments) HasOverflowField() bool`

HasOverflowField returns a boolean if a field has been set.

### GetOverflowSeparator

`func (o *RoutesTransformOperationArguments) GetOverflowSeparator() string`

GetOverflowSeparator returns the OverflowSeparator field if non-nil, zero value otherwise.

### GetOverflowSeparatorOk

`func (o *RoutesTransformOperationArguments) GetOverflowSeparatorOk() (*string, bool)`

GetOverflowSeparatorOk returns a tuple with the OverflowSeparator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverflowSeparator

`func (o *RoutesTransformOperationArguments) SetOverflowSeparator(v string)`

SetOverflowSeparator sets OverflowSeparator field to given value.

### HasOverflowSeparator

`func (o *RoutesTransformOperationArguments) HasOverflowSeparator() bool`

HasOverflowSeparator returns a boolean if a field has been set.

### GetPreset

`func (o *RoutesTransformOperationArguments) GetPreset() string`

GetPreset returns the Preset field if non-nil, zero value otherwise.

### GetPresetOk

`func (o *RoutesTransformOperationArguments) GetPresetOk() (*string, bool)`

GetPresetOk returns a tuple with the Preset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreset

`func (o *RoutesTransformOperationArguments) SetPreset(v string)`

SetPreset sets Preset field to given value.

### HasPreset

`func (o *RoutesTransformOperationArguments) HasPreset() bool`

HasPreset returns a boolean if a field has been set.

### GetResolveLabels

`func (o *RoutesTransformOperationArguments) GetResolveLabels() bool`

GetResolveLabels returns the ResolveLabels field if non-nil, zero value otherwise.

### GetResolveLabelsOk

`func (o *RoutesTransformOperationArguments) GetResolveLabelsOk() (*bool, bool)`

GetResolveLabelsOk returns a tuple with the ResolveLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveLabels

`func (o *RoutesTransformOperationArguments) SetResolveLabels(v bool)`

SetResolveLabels sets ResolveLabels field to given value.

### HasResolveLabels

`func (o *RoutesTransformOperationArguments) HasResolveLabels() bool`

HasResolveLabels returns a boolean if a field has been set.

### GetStrict

`func (o *RoutesTransformOperationArguments) GetStrict() bool`

GetStrict returns the Strict field if non-nil, zero value otherwise.

### GetStrictOk

`func (o *RoutesTransformOperationArguments) GetStrictOk() (*bool, bool)`

GetStrictOk returns a tuple with the Strict field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrict

`func (o *RoutesTransformOperationArguments) SetStrict(v bool)`

SetStrict sets Strict field to given value.

### HasStrict

`func (o *RoutesTransformOperationArguments) HasStrict() bool`

HasStrict returns a boolean if a field has been set.

### GetStripQuotes

`func (o *RoutesTransformOperationArguments) GetStripQuotes() bool`

GetStripQuotes returns the StripQuotes field if non-nil, zero value otherwise.

### GetStripQuotesOk

`func (o *RoutesTransformOperationArguments) GetStripQuotesOk() (*bool, bool)`

GetStripQuotesOk returns a tuple with the StripQuotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStripQuotes

`func (o *RoutesTransformOperationArguments) SetStripQuotes(v bool)`

SetStripQuotes sets StripQuotes field to given value.

### HasStripQuotes

`func (o *RoutesTransformOperationArguments) HasStripQuotes() bool`

HasStripQuotes returns a boolean if a field has been set.

### GetWarningsKey

`func (o *RoutesTransformOperationArguments) GetWarningsKey() string`

GetWarningsKey returns the WarningsKey field if non-nil, zero value otherwise.

### GetWarningsKeyOk

`func (o *RoutesTransformOperationArguments) GetWarningsKeyOk() (*string, bool)`

GetWarningsKeyOk returns a tuple with the WarningsKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarningsKey

`func (o *RoutesTransformOperationArguments) SetWarningsKey(v string)`

SetWarningsKey sets WarningsKey field to given value.

### HasWarningsKey

`func (o *RoutesTransformOperationArguments) HasWarningsKey() bool`

HasWarningsKey returns a boolean if a field has been set.

### GetSourceFormat

`func (o *RoutesTransformOperationArguments) GetSourceFormat() ConvertTimestampTimestampFormat`

GetSourceFormat returns the SourceFormat field if non-nil, zero value otherwise.

### GetSourceFormatOk

`func (o *RoutesTransformOperationArguments) GetSourceFormatOk() (*ConvertTimestampTimestampFormat, bool)`

GetSourceFormatOk returns a tuple with the SourceFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormat

`func (o *RoutesTransformOperationArguments) SetSourceFormat(v ConvertTimestampTimestampFormat)`

SetSourceFormat sets SourceFormat field to given value.

### HasSourceFormat

`func (o *RoutesTransformOperationArguments) HasSourceFormat() bool`

HasSourceFormat returns a boolean if a field has been set.

### GetSourceFormatCustom

`func (o *RoutesTransformOperationArguments) GetSourceFormatCustom() string`

GetSourceFormatCustom returns the SourceFormatCustom field if non-nil, zero value otherwise.

### GetSourceFormatCustomOk

`func (o *RoutesTransformOperationArguments) GetSourceFormatCustomOk() (*string, bool)`

GetSourceFormatCustomOk returns a tuple with the SourceFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormatCustom

`func (o *RoutesTransformOperationArguments) SetSourceFormatCustom(v string)`

SetSourceFormatCustom sets SourceFormatCustom field to given value.

### HasSourceFormatCustom

`func (o *RoutesTransformOperationArguments) HasSourceFormatCustom() bool`

HasSourceFormatCustom returns a boolean if a field has been set.

### GetSourceKey

`func (o *RoutesTransformOperationArguments) GetSourceKey() string`

GetSourceKey returns the SourceKey field if non-nil, zero value otherwise.

### GetSourceKeyOk

`func (o *RoutesTransformOperationArguments) GetSourceKeyOk() (*string, bool)`

GetSourceKeyOk returns a tuple with the SourceKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceKey

`func (o *RoutesTransformOperationArguments) SetSourceKey(v string)`

SetSourceKey sets SourceKey field to given value.

### HasSourceKey

`func (o *RoutesTransformOperationArguments) HasSourceKey() bool`

HasSourceKey returns a boolean if a field has been set.

### GetSourceTimezone

`func (o *RoutesTransformOperationArguments) GetSourceTimezone() string`

GetSourceTimezone returns the SourceTimezone field if non-nil, zero value otherwise.

### GetSourceTimezoneOk

`func (o *RoutesTransformOperationArguments) GetSourceTimezoneOk() (*string, bool)`

GetSourceTimezoneOk returns a tuple with the SourceTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTimezone

`func (o *RoutesTransformOperationArguments) SetSourceTimezone(v string)`

SetSourceTimezone sets SourceTimezone field to given value.

### HasSourceTimezone

`func (o *RoutesTransformOperationArguments) HasSourceTimezone() bool`

HasSourceTimezone returns a boolean if a field has been set.

### GetTargetFormat

`func (o *RoutesTransformOperationArguments) GetTargetFormat() ConvertTimestampTimestampFormat`

GetTargetFormat returns the TargetFormat field if non-nil, zero value otherwise.

### GetTargetFormatOk

`func (o *RoutesTransformOperationArguments) GetTargetFormatOk() (*ConvertTimestampTimestampFormat, bool)`

GetTargetFormatOk returns a tuple with the TargetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormat

`func (o *RoutesTransformOperationArguments) SetTargetFormat(v ConvertTimestampTimestampFormat)`

SetTargetFormat sets TargetFormat field to given value.

### HasTargetFormat

`func (o *RoutesTransformOperationArguments) HasTargetFormat() bool`

HasTargetFormat returns a boolean if a field has been set.

### GetTargetFormatCustom

`func (o *RoutesTransformOperationArguments) GetTargetFormatCustom() string`

GetTargetFormatCustom returns the TargetFormatCustom field if non-nil, zero value otherwise.

### GetTargetFormatCustomOk

`func (o *RoutesTransformOperationArguments) GetTargetFormatCustomOk() (*string, bool)`

GetTargetFormatCustomOk returns a tuple with the TargetFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormatCustom

`func (o *RoutesTransformOperationArguments) SetTargetFormatCustom(v string)`

SetTargetFormatCustom sets TargetFormatCustom field to given value.

### HasTargetFormatCustom

`func (o *RoutesTransformOperationArguments) HasTargetFormatCustom() bool`

HasTargetFormatCustom returns a boolean if a field has been set.

### GetTargetKey

`func (o *RoutesTransformOperationArguments) GetTargetKey() string`

GetTargetKey returns the TargetKey field if non-nil, zero value otherwise.

### GetTargetKeyOk

`func (o *RoutesTransformOperationArguments) GetTargetKeyOk() (*string, bool)`

GetTargetKeyOk returns a tuple with the TargetKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetKey

`func (o *RoutesTransformOperationArguments) SetTargetKey(v string)`

SetTargetKey sets TargetKey field to given value.

### HasTargetKey

`func (o *RoutesTransformOperationArguments) HasTargetKey() bool`

HasTargetKey returns a boolean if a field has been set.

### GetTargetTimezone

`func (o *RoutesTransformOperationArguments) GetTargetTimezone() string`

GetTargetTimezone returns the TargetTimezone field if non-nil, zero value otherwise.

### GetTargetTimezoneOk

`func (o *RoutesTransformOperationArguments) GetTargetTimezoneOk() (*string, bool)`

GetTargetTimezoneOk returns a tuple with the TargetTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTimezone

`func (o *RoutesTransformOperationArguments) SetTargetTimezone(v string)`

SetTargetTimezone sets TargetTimezone field to given value.

### HasTargetTimezone

`func (o *RoutesTransformOperationArguments) HasTargetTimezone() bool`

HasTargetTimezone returns a boolean if a field has been set.

### GetKeyToWatch

`func (o *RoutesTransformOperationArguments) GetKeyToWatch() string`

GetKeyToWatch returns the KeyToWatch field if non-nil, zero value otherwise.

### GetKeyToWatchOk

`func (o *RoutesTransformOperationArguments) GetKeyToWatchOk() (*string, bool)`

GetKeyToWatchOk returns a tuple with the KeyToWatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyToWatch

`func (o *RoutesTransformOperationArguments) SetKeyToWatch(v string)`

SetKeyToWatch sets KeyToWatch field to given value.

### HasKeyToWatch

`func (o *RoutesTransformOperationArguments) HasKeyToWatch() bool`

HasKeyToWatch returns a boolean if a field has been set.

### GetValueToWatch

`func (o *RoutesTransformOperationArguments) GetValueToWatch() interface{}`

GetValueToWatch returns the ValueToWatch field if non-nil, zero value otherwise.

### GetValueToWatchOk

`func (o *RoutesTransformOperationArguments) GetValueToWatchOk() (*interface{}, bool)`

GetValueToWatchOk returns a tuple with the ValueToWatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueToWatch

`func (o *RoutesTransformOperationArguments) SetValueToWatch(v interface{})`

SetValueToWatch sets ValueToWatch field to given value.

### HasValueToWatch

`func (o *RoutesTransformOperationArguments) HasValueToWatch() bool`

HasValueToWatch returns a boolean if a field has been set.

### SetValueToWatchNil

`func (o *RoutesTransformOperationArguments) SetValueToWatchNil(b bool)`

 SetValueToWatchNil sets the value for ValueToWatch to be an explicit nil

### UnsetValueToWatch
`func (o *RoutesTransformOperationArguments) UnsetValueToWatch()`

UnsetValueToWatch ensures that no value is present for ValueToWatch, not even an explicit nil
### GetNewKey

`func (o *RoutesTransformOperationArguments) GetNewKey() string`

GetNewKey returns the NewKey field if non-nil, zero value otherwise.

### GetNewKeyOk

`func (o *RoutesTransformOperationArguments) GetNewKeyOk() (*string, bool)`

GetNewKeyOk returns a tuple with the NewKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewKey

`func (o *RoutesTransformOperationArguments) SetNewKey(v string)`

SetNewKey sets NewKey field to given value.

### HasNewKey

`func (o *RoutesTransformOperationArguments) HasNewKey() bool`

HasNewKey returns a boolean if a field has been set.

### GetAlgorithm

`func (o *RoutesTransformOperationArguments) GetAlgorithm() EncryptAlgorithmConfig`

GetAlgorithm returns the Algorithm field if non-nil, zero value otherwise.

### GetAlgorithmOk

`func (o *RoutesTransformOperationArguments) GetAlgorithmOk() (*EncryptAlgorithmConfig, bool)`

GetAlgorithmOk returns a tuple with the Algorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlgorithm

`func (o *RoutesTransformOperationArguments) SetAlgorithm(v EncryptAlgorithmConfig)`

SetAlgorithm sets Algorithm field to given value.

### HasAlgorithm

`func (o *RoutesTransformOperationArguments) HasAlgorithm() bool`

HasAlgorithm returns a boolean if a field has been set.

### GetDelimiter

`func (o *RoutesTransformOperationArguments) GetDelimiter() string`

GetDelimiter returns the Delimiter field if non-nil, zero value otherwise.

### GetDelimiterOk

`func (o *RoutesTransformOperationArguments) GetDelimiterOk() (*string, bool)`

GetDelimiterOk returns a tuple with the Delimiter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimiter

`func (o *RoutesTransformOperationArguments) SetDelimiter(v string)`

SetDelimiter sets Delimiter field to given value.

### HasDelimiter

`func (o *RoutesTransformOperationArguments) HasDelimiter() bool`

HasDelimiter returns a boolean if a field has been set.

### GetPreventDataDropping

`func (o *RoutesTransformOperationArguments) GetPreventDataDropping() bool`

GetPreventDataDropping returns the PreventDataDropping field if non-nil, zero value otherwise.

### GetPreventDataDroppingOk

`func (o *RoutesTransformOperationArguments) GetPreventDataDroppingOk() (*bool, bool)`

GetPreventDataDroppingOk returns a tuple with the PreventDataDropping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreventDataDropping

`func (o *RoutesTransformOperationArguments) SetPreventDataDropping(v bool)`

SetPreventDataDropping sets PreventDataDropping field to given value.

### HasPreventDataDropping

`func (o *RoutesTransformOperationArguments) HasPreventDataDropping() bool`

HasPreventDataDropping returns a boolean if a field has been set.

### GetQuery

`func (o *RoutesTransformOperationArguments) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *RoutesTransformOperationArguments) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *RoutesTransformOperationArguments) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *RoutesTransformOperationArguments) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetMode

`func (o *RoutesTransformOperationArguments) GetMode() MaskModeConfig`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *RoutesTransformOperationArguments) GetModeOk() (*MaskModeConfig, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *RoutesTransformOperationArguments) SetMode(v MaskModeConfig)`

SetMode sets Mode field to given value.

### HasMode

`func (o *RoutesTransformOperationArguments) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetValueToSet

`func (o *RoutesTransformOperationArguments) GetValueToSet() interface{}`

GetValueToSet returns the ValueToSet field if non-nil, zero value otherwise.

### GetValueToSetOk

`func (o *RoutesTransformOperationArguments) GetValueToSetOk() (*interface{}, bool)`

GetValueToSetOk returns a tuple with the ValueToSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueToSet

`func (o *RoutesTransformOperationArguments) SetValueToSet(v interface{})`

SetValueToSet sets ValueToSet field to given value.

### HasValueToSet

`func (o *RoutesTransformOperationArguments) HasValueToSet() bool`

HasValueToSet returns a boolean if a field has been set.

### SetValueToSetNil

`func (o *RoutesTransformOperationArguments) SetValueToSetNil(b bool)`

 SetValueToSetNil sets the value for ValueToSet to be an explicit nil

### UnsetValueToSet
`func (o *RoutesTransformOperationArguments) UnsetValueToSet()`

UnsetValueToSet ensures that no value is present for ValueToSet, not even an explicit nil
### GetFormat

`func (o *RoutesTransformOperationArguments) GetFormat() UtcTimestampTimestampFormat`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *RoutesTransformOperationArguments) GetFormatOk() (*UtcTimestampTimestampFormat, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *RoutesTransformOperationArguments) SetFormat(v UtcTimestampTimestampFormat)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *RoutesTransformOperationArguments) HasFormat() bool`

HasFormat returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


