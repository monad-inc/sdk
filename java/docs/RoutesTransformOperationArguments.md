

# RoutesTransformOperationArguments


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**key** | **String** | The key to store the timestamp in |  [optional] |
|**value** | **Object** |  |  [optional] |
|**type** | **String** | The new type of the key |  [optional] |
|**columns** | **Map&lt;String, String&gt;** | Custom CEF-key -&gt; output-column map; entries override the preset. |  [optional] |
|**continuationMarker** | **String** | Collector continuation marker, e.g. \&quot;#LF#\&quot; or \&quot;#012\&quot;; \&quot;\&quot; disables continuation handling. |  [optional] |
|**continuationMode** | **String** | \&quot;spill\&quot; (default), \&quot;keep\&quot;, or \&quot;newline\&quot;. |  [optional] |
|**dialect** | **String** | \&quot;cef\&quot; (spec-faithful, default) or \&quot;legacy_kv\&quot; (bug-compat with jq CEF parsers). |  [optional] |
|**emptyToNull** | **Boolean** | Write empty-string values as null. Default false. |  [optional] |
|**envelope** | **Map&lt;String, String&gt;** | Output field -&gt; record path (JSONPath), copied verbatim; missing -&gt; null. |  [optional] |
|**headerFields** | **List&lt;String&gt;** | Exactly 7 output names for the header slots; default per preset. |  [optional] |
|**isoDateColumns** | **List&lt;String&gt;** | Output columns rewritten \&quot;YYYY/MM/DD HH:MM:SS\&quot; -&gt; \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;. |  [optional] |
|**numericColumns** | **List&lt;String&gt;** | Output columns coerced to number (invalid -&gt; null); unset &#x3D; preset default, [] &#x3D; off. |  [optional] |
|**outputKey** | **String** | Target key when output_mode is \&quot;under_key\&quot;. |  [optional] |
|**outputMode** | **String** | \&quot;replace\&quot; (default), \&quot;merge\&quot;, or \&quot;under_key\&quot;. |  [optional] |
|**overflowField** | **String** | Unmapped keys joined into this field; \&quot;\&quot; emits unmapped keys as individual fields. |  [optional] |
|**overflowSeparator** | **String** | Separator between overflow entries. Default \&quot;;\&quot;. |  [optional] |
|**preset** | **String** | \&quot;\&quot; (none), \&quot;cef_full_names\&quot;, or \&quot;common_security_log\&quot;. |  [optional] |
|**resolveLabels** | **Boolean** | Promote csN/csNLabel-style pairs into fields named by the label. Default false. |  [optional] |
|**strict** | **Boolean** | Fail the record on structural problems instead of best-effort parsing. Default false. |  [optional] |
|**stripQuotes** | **Boolean** | Remove one leading+trailing double-quote from values that carry both. Default false. |  [optional] |
|**warningsKey** | **String** | Write parse warnings as a string array under this key; \&quot;\&quot; (default) omits them. |  [optional] |
|**sourceFormat** | **ConvertTimestampTimestampFormat** |  |  [optional] |
|**sourceFormatCustom** | **String** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) |  [optional] |
|**sourceKey** | **String** | Required: JSONPath to source timestamp field |  [optional] |
|**sourceTimezone** | **String** | Optional: Source timezone (default: UTC) |  [optional] |
|**targetFormat** | **ConvertTimestampTimestampFormat** |  |  [optional] |
|**targetFormatCustom** | **String** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) |  [optional] |
|**targetKey** | **String** | Optional: Target field (if empty, overwrites SourceKey) |  [optional] |
|**targetTimezone** | **String** | Optional: Target timezone (default: UTC) |  [optional] |
|**keyToWatch** | **String** | The key to watch for |  [optional] |
|**valueToWatch** | **Object** |  |  [optional] |
|**fields** | **List&lt;String&gt;** | Fields to hash, in order; empty hashes the whole record |  [optional] |
|**window** | **String** | dedup window / key TTL: one of 1m..5m |  [optional] |
|**newKey** | **String** | The new key to rename to |  [optional] |
|**algorithm** | **String** | Hash algorithm |  [optional] |
|**delimiter** | **String** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 |  [optional] |
|**preventDataDropping** | **Boolean** | PreventDataDropping errors instead of dropping the record when the query produces no output. Only applies when Key is unset, since storing the result under a key always emits a record. |  [optional] |
|**query** | **String** | The raw query string from config |  [optional] |
|**mode** | [**MaskModeConfig**](MaskModeConfig.md) |  |  [optional] |
|**valueToSet** | **Object** |  |  [optional] |
|**format** | **UtcTimestampTimestampFormat** |  |  [optional] |



