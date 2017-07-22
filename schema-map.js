import pgformat from 'pg-format';
import wkt from 'wellknown';
import { core } from 'fulcrum';

export default class SchemaMap {
  // * force 2d
  // * remove duplicate vertices
  static geomFromGeoJSON(geojsonGeometry) {
    if (geojsonGeometry == null) {
      return null;
    }

    return `ST_RemoveRepeatedPoints(ST_Force2D(ST_GeomFromText(${ pgformat('%L', wkt.stringify(geojsonGeometry)) }, 4326)))`;
  }

  // * force to multi
  // * force 2d
  // * remove duplicate vertices
  static multiGeomFromGeoJSON(geojsonGeometry) {
    if (geojsonGeometry == null) {
      return null;
    }

    return `ST_RemoveRepeatedPoints(ST_Force2D(ST_Multi(ST_GeomFromText(${ pgformat('%L', wkt.stringify(geojsonGeometry)) }, 4326))))`;
  }

  static geometry(latitude, longitude) {
    return { raw: this.geomFromGeoJSON({type: 'Point', coordinates: [ +longitude, +latitude ]}) };
  }

  static trackGeometry(trackJSON) {
    if (trackJSON) {
      const track = new core.Track('video', trackJSON);

      const geoJSON = track.toGeoJSONMultiLineString();

      if (geoJSON && geoJSON.geometry && geoJSON.geometry.coordinates.length && geoJSON.geometry.coordinates[0].length > 1) {
        return { raw: this.multiGeomFromGeoJSON(geoJSON) };
      }
    }

    return null;
  }

  static photo(row) {
    const hasLocation = row._latitude != null && row._longitude != null;

    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      access_key: row.id,
      record_id: row._recordRowID,
      record_resource_id: row._recordID,
      form_id: row._formRowID,
      form_resource_id: row._formID,
      exif: row._exif ? JSON.stringify(row._exif) : null,
      file_size: row._fileSize,
      created_by_id: row._createdByRowID,
      created_by_resource_id: row._createdByID,
      updated_by_id: row._updatedByRowID,
      updated_by_resource_id: row._updatedByID,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      file: row._filePath,
      content_type: row._contentType,
      is_uploaded: row._isUploaded,
      is_stored: row._isStored,
      is_processed: row._isProcessed,
      geometry: hasLocation ? this.geometry(row._latitude, row._longitude) : null,
      latitude: hasLocation ? row._latitude : null,
      longitude: hasLocation ? row._longitude : null,
      altitude: row._altitude,
      direction: row._direction,
      accuracy: row._accuracy,
      width: row._width,
      height: row._height,
      make: row._make,
      model: row._model,
      software: row._software,
      date_time: row._dateTime
    };
  }

  static video(row) {
    return {
      row_id: row._rowID,
      row_resource_id: row.id,
      access_key: row.id,
      record_id: row._recordRowID,
      record_resource_id: row._recordID,
      form_id: row._formRowID,
      form_resource_id: row._formID,
      metadata: row._metadata,
      has_track: row._hasTrack,
      track: row._trackJSON,
      file_size: row._fileSize,
      created_by_id: row._createdByRowID,
      created_by_resource_id: row._createdByID,
      updated_by_id: row._updatedByRowID,
      updated_by_resource_id: row._updatedByID,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      file: row._filePath,
      content_type: row._contentType,
      is_uploaded: row._isUploaded,
      is_stored: row._isStored,
      is_processed: row._isProcessed,
      geometry: this.trackGeometry(row._trackJSON),
      width: row._width,
      height: row._height,
      duration: row._duration,
      bit_rate: row._bitRate
    };
  }

  static audio(row) {
    return {
      row_id: row._rowID,
      row_resource_id: row.id,
      access_key: row.id,
      record_id: row._recordRowID,
      record_resource_id: row._recordID,
      form_id: row._formRowID,
      form_resource_id: row._formID,
      metadata: row._metadata,
      has_track: row._hasTrack,
      track: row._trackJSON,
      file_size: row._fileSize,
      created_by_id: row._createdByRowID,
      created_by_resource_id: row._createdByID,
      updated_by_id: row._updatedByRowID,
      updated_by_resource_id: row._updatedByID,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      file: row._filePath,
      content_type: row._contentType,
      is_uploaded: row._isUploaded,
      is_stored: row._isStored,
      is_processed: row._isProcessed,
      geometry: this.trackGeometry(row._trackJSON),
      duration: row._duration,
      bit_rate: row._bitRate
    };
  }

  static changeset(row) {
    const geometry = this.geomFromGeoJSON(row.boundingBoxAsGeoJSON);

    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      form_id: row._formRowID,
      form_resource_id: row._formID,
      metadata: row._metadata,
      closed_at: row._closedAt,
      created_by_id: row._createdByRowID,
      created_by_resource_id: row._createdByID,
      updated_by_id: row._updatedByRowID,
      updated_by_resource_id: row._updatedByID,
      closed_by_id: row._closedByRowID,
      closed_by_resource_id: row._closedByID,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      min_lat: row._minLat,
      max_lat: row._maxLat,
      min_lon: row._minLon,
      max_lon: row._maxLon,
      number_of_changes: row._numberOfChanges,
      number_of_creates: row._numberOfCreates,
      number_of_updates: row._numberOfUpdated,
      number_of_deletes: row._numberOfDeletes,
      metadata_index_text: row._metadataIndexText,
      metadata_index: {raw: `to_tsvector(${ pgformat('%L', row._metadataIndexText) })`},
      bounding_box: geometry ? {raw: this.geomFromGeoJSON(row.boundingBoxAsGeoJSON)} : null
    };
  }

  static choiceList(row) {
    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      name: row._name,
      description: row._description,
      version: row._version,
      items: row._choicesJSON,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      deleted_at: row._deletedAt
    };
  }

  static classificationSet(row) {
    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      name: row._name,
      description: row._description,
      version: row._version,
      items: row._itemsJSON,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      deleted_at: row._deletedAt
    };
  }

  static form(row) {
    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      name: row._name,
      description: row._description,
      version: row._version,
      elements: row._elements,
      status: row._status,
      status_field: row._statusFieldJSON,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      deleted_at: row._deletedAt,
      auto_assign: row._autoAssign,
      title_field_keys: row._titleFieldKeys,
      hidden_on_dashboard: row._hiddenOnDashboard,
      geometry_types: row._geometryTypes,
      geometry_required: row._geometryRequired,
      script: row._script,
      image: row._image,
      projects_enabled: !!row._projectEnabled,
      assignment_enabled: !!row._assignmentEnabled
    };
  }

  static project(row) {
    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      name: row._name,
      description: row._description,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      deleted_at: row._deletedAt
    };
  }

  static role(row) {
    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      name: row._name,
      description: row._description,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      deleted_at: row._deletedAt,
      is_system: row._isSystem,
      is_default: row._isDefault,
      can_manage_subscription: row.canManageSubscription,
      can_update_organization: row.canUpdateOrganization,
      can_manage_members: row.canManageMembers,
      can_manage_roles: row.canManageRoles,
      can_manage_apps: row.canManageApps,
      can_manage_projects: row.canManageProjects,
      can_manage_choice_lists: row.canManageChoiceLists,
      can_manage_classification_sets: row.canManageClassificationSets,
      can_create_records: row.canCreateRecords,
      can_update_records: row.canUpdateRecords,
      can_delete_records: row.canDeleteRecords,
      can_change_status: row.canChangeStatus,
      can_change_project: row.canChangeProject,
      can_assign_records: row.canAssignRecords,
      can_import_records: row.canImportRecords,
      can_export_records: row.canExportRecords,
      can_run_reports: row.canRunReports
    };
  }

  static membership(row) {
    return {
      row_id: row.rowID,
      row_resource_id: row.id,
      user_resource_id: row._userID,
      first_name: row._firstName,
      last_name: row._lastName,
      name: (row._firstName || '') + ' ' + (row._lastName || ''),
      email: row._email,
      role_id: row._roleRowID,
      role_resource_id: row._roleID,
      status: row.status,
      created_at: row._createdAt,
      updated_at: row._updatedAt,
      deleted_at: row._deletedAt
    };
  }
}