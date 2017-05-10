'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = {};

Schema.systemFormTableColumns = [{
  name: 'id',
  type: 'pk'
}, {
  name: 'record_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'record_resource_id',
  type: 'string',
  allowNull: false
}, {
  name: 'project_id',
  type: 'integer'
}, {
  name: 'project_resource_id',
  type: 'string'
}, {
  name: 'assigned_to_id',
  type: 'integer'
}, {
  name: 'assigned_to_resource_id',
  type: 'string'
}, {
  name: 'status',
  type: 'string'
}, {
  name: 'latitude',
  type: 'double'
}, {
  name: 'longitude',
  type: 'double'
}, {
  name: 'created_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'updated_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'version',
  type: 'integer',
  allowNull: false
}, {
  name: 'created_by_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'created_by_resource_id',
  type: 'string'
}, {
  name: 'updated_by_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'updated_by_resource_id',
  type: 'string'
}, {
  name: 'server_created_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'server_updated_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'record_index_text',
  type: 'string'
}, {
  name: 'record_index',
  type: 'fts'
}, {
  name: 'geometry',
  type: 'geometry'
}, {
  name: 'altitude',
  type: 'double'
}, {
  name: 'speed',
  type: 'double'
}, {
  name: 'course',
  type: 'double'
}, {
  name: 'horizontal_accuracy',
  type: 'double'
}, {
  name: 'vertical_accuracy',
  type: 'double'
}, {
  name: 'form_values',
  type: 'text'
}, {
  name: 'changeset_id',
  type: 'integer'
}, {
  name: 'changeset_resource_id',
  type: 'string'
}, {
  name: 'title',
  type: 'string'
}, {
  name: 'created_latitude',
  type: 'double'
}, {
  name: 'created_longitude',
  type: 'double'
}, {
  name: 'created_geometry',
  type: 'geometry'
}, {
  name: 'created_altitude',
  type: 'double'
}, {
  name: 'created_horizontal_accuracy',
  type: 'double'
}, {
  name: 'updated_latitude',
  type: 'double'
}, {
  name: 'updated_longitude',
  type: 'double'
}, {
  name: 'updated_geometry',
  type: 'geometry'
}, {
  name: 'updated_altitude',
  type: 'double'
}, {
  name: 'updated_horizontal_accuracy',
  type: 'double'
}, {
  name: 'created_duration',
  type: 'integer'
}, {
  name: 'updated_duration',
  type: 'integer'
}, {
  name: 'edited_duration',
  type: 'integer'
}];

Schema.systemValuesTableColumns = [{
  name: 'id',
  type: 'pk'
}, {
  name: 'record_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'record_resource_id',
  type: 'string'
}, {
  name: 'parent_resource_id',
  type: 'string'
}, {
  name: 'key',
  type: 'string',
  allowNull: false
}, {
  name: 'text_value',
  type: 'string'
}, {
  name: 'number_value',
  type: 'double'
}];

Schema.systemRepeatableTableColumns = [{
  name: 'id',
  type: 'pk'
}, {
  name: 'resource_id',
  type: 'string',
  allowNull: false
}, {
  name: 'record_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'record_resource_id',
  type: 'string',
  allowNull: false
}, {
  name: 'parent_resource_id',
  type: 'string'
}, {
  name: 'record_project_id',
  type: 'integer'
}, {
  name: 'record_project_resource_id',
  type: 'string'
}, {
  name: 'record_assigned_to_id',
  type: 'integer'
}, {
  name: 'record_assigned_to_resource_id',
  type: 'string'
}, {
  name: 'record_status',
  type: 'string'
}, {
  name: 'index', // TODO(zhm) make this work in the app
  type: 'integer'
}, {
  name: 'latitude',
  type: 'double'
}, {
  name: 'longitude',
  type: 'double'
}, {
  name: 'created_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'updated_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'version',
  type: 'integer',
  allowNull: false
}, {
  name: 'created_by_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'created_by_resource_id',
  type: 'string'
}, {
  name: 'updated_by_id',
  type: 'integer',
  allowNull: false
}, {
  name: 'updated_by_resource_id',
  type: 'string'
}, {
  name: 'server_created_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'server_updated_at',
  type: 'timestamp',
  allowNull: false
}, {
  name: 'record_index_text',
  type: 'string'
}, {
  name: 'record_index',
  type: 'fts'
}, {
  name: 'geometry',
  type: 'geometry'
}, {
  name: 'altitude',
  type: 'double'
}, {
  name: 'speed',
  type: 'double'
}, {
  name: 'course',
  type: 'double'
}, {
  name: 'horizontal_accuracy',
  type: 'double'
}, {
  name: 'vertical_accuracy',
  type: 'double'
}, {
  name: 'form_values',
  type: 'text'
}, {
  name: 'changeset_id',
  type: 'integer'
}, {
  name: 'changeset_resource_id',
  type: 'string'
}, {
  name: 'title',
  type: 'string'
}, {
  name: 'created_latitude',
  type: 'double'
}, {
  name: 'created_longitude',
  type: 'double'
}, {
  name: 'created_geometry',
  type: 'geometry'
}, {
  name: 'created_altitude',
  type: 'double'
}, {
  name: 'created_horizontal_accuracy',
  type: 'double'
}, {
  name: 'updated_latitude',
  type: 'double'
}, {
  name: 'updated_longitude',
  type: 'double'
}, {
  name: 'updated_geometry',
  type: 'geometry'
}, {
  name: 'updated_altitude',
  type: 'double'
}, {
  name: 'updated_horizontal_accuracy',
  type: 'double'
}, {
  name: 'created_duration',
  type: 'integer'
}, {
  name: 'updated_duration',
  type: 'integer'
}, {
  name: 'edited_duration',
  type: 'integer'
}];

Schema.systemFormViewColumns = {
  record_resource_id: 'record_id',
  project_resource_id: 'project_id',
  assigned_to_resource_id: 'assigned_to_id',
  status: 'status',
  latitude: 'latitude',
  longitude: 'longitude',
  created_at: 'created_at',
  updated_at: 'updated_at',
  version: 'version',
  created_by_resource_id: 'created_by_id',
  updated_by_resource_id: 'updated_by_id',
  server_created_at: 'server_created_at',
  server_updated_at: 'server_updated_at',
  geometry: 'geometry',
  altitude: 'altitude',
  speed: 'speed',
  course: 'course',
  horizontal_accuracy: 'horizontal_accuracy',
  vertical_accuracy: 'vertical_accuracy',
  changeset_resource_id: 'changeset_id',
  title: 'title',
  created_latitude: 'created_latitude',
  created_longitude: 'created_longitude',
  created_altitude: 'created_altitude',
  created_horizontal_accuracy: 'created_horizontal_accuracy',
  updated_latitude: 'updated_latitude',
  updated_longitude: 'updated_longitude',
  updated_altitude: 'updated_altitude',
  updated_horizontal_accuracy: 'updated_horizontal_accuracy',
  created_duration: 'created_duration',
  updated_duration: 'updated_duration',
  edited_duration: 'edited_duration'
};

Schema.systemFormFullViewColumns = _underscore2.default.clone(Schema.systemFormViewColumns);
Schema.systemFormFullViewColumns.form_values = 'form_values';
Schema.systemFormFullViewColumns.record_index = 'record_index';
Schema.systemFormFullViewColumns.record_index_text = 'record_index_text';

Schema.systemRepeatableViewColumns = {
  resource_id: 'child_record_id',
  record_resource_id: 'record_id',
  parent_resource_id: 'parent_id',
  record_project_resource_id: 'record_project_id',
  record_assigned_to_resource_id: 'record_assigned_to_id',
  record_status: 'record_status',
  index: 'index',
  latitude: 'latitude',
  longitude: 'longitude',
  created_at: 'created_at',
  updated_at: 'updated_at',
  version: 'version',
  created_by_resource_id: 'created_by_id',
  updated_by_resource_id: 'updated_by_id',
  server_created_at: 'server_created_at',
  server_updated_at: 'server_updated_at',
  geometry: 'geometry',
  changeset_resource_id: 'changeset_id',
  title: 'title',
  created_latitude: 'created_latitude',
  created_longitude: 'created_longitude',
  created_altitude: 'created_altitude',
  created_horizontal_accuracy: 'created_horizontal_accuracy',
  updated_latitude: 'updated_latitude',
  updated_longitude: 'updated_longitude',
  updated_altitude: 'updated_altitude',
  updated_horizontal_accuracy: 'updated_horizontal_accuracy',
  created_duration: 'created_duration',
  updated_duration: 'updated_duration',
  edited_duration: 'edited_duration'
};

Schema.systemRepeatableFullViewColumns = _underscore2.default.clone(Schema.systemRepeatableViewColumns);
Schema.systemRepeatableFullViewColumns.form_values = 'form_values';
Schema.systemRepeatableFullViewColumns.record_index = 'record_index';
Schema.systemRepeatableFullViewColumns.record_index_text = 'record_index_text';

Schema.systemValuesViewColumns = {
  record_resource_id: 'record_id',
  parent_resource_id: 'child_record_id',
  key: 'key',
  text_value: 'text_value'
};

Schema.systemFormTableIndexes = [{ columns: ['record_resource_id'], method: 'btree', unique: true }, { columns: ['geometry'], method: 'gist' }, { columns: ['record_index'], method: 'gin' }, { columns: ['status'], method: 'btree' }, { columns: ['server_updated_at'], method: 'btree' }, { columns: ['project_resource_id'], method: 'btree' }, { columns: ['assigned_to_resource_id'], method: 'btree' }, { columns: ['changeset_resource_id'], method: 'btree' }];

Schema.systemRepeatableTableIndexes = [{ columns: ['resource_id'], method: 'btree', unique: true }, { columns: ['record_resource_id'], method: 'btree' }, { columns: ['parent_resource_id'], method: 'btree' }, { columns: ['geometry'], method: 'gist' }, { columns: ['record_index'], method: 'gin' }, { columns: ['record_status'], method: 'btree' }, { columns: ['updated_at'], method: 'btree' }, { columns: ['record_project_resource_id'], method: 'btree' }, { columns: ['record_assigned_to_resource_id'], method: 'btree' }, { columns: ['changeset_resource_id'], method: 'btree' }];

Schema.systemValuesTableIndexes = [{ columns: ['record_resource_id'], method: 'btree' }, { columns: ['parent_resource_id'], method: 'btree' }, { columns: ['text_value'], method: 'btree' }, { columns: ['key'], method: 'btree' }];

exports.default = Schema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Bvc3RncmVzLXNjaGVtYS5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJzeXN0ZW1Gb3JtVGFibGVDb2x1bW5zIiwibmFtZSIsInR5cGUiLCJhbGxvd051bGwiLCJzeXN0ZW1WYWx1ZXNUYWJsZUNvbHVtbnMiLCJzeXN0ZW1SZXBlYXRhYmxlVGFibGVDb2x1bW5zIiwic3lzdGVtRm9ybVZpZXdDb2x1bW5zIiwicmVjb3JkX3Jlc291cmNlX2lkIiwicHJvamVjdF9yZXNvdXJjZV9pZCIsImFzc2lnbmVkX3RvX3Jlc291cmNlX2lkIiwic3RhdHVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsInZlcnNpb24iLCJjcmVhdGVkX2J5X3Jlc291cmNlX2lkIiwidXBkYXRlZF9ieV9yZXNvdXJjZV9pZCIsInNlcnZlcl9jcmVhdGVkX2F0Iiwic2VydmVyX3VwZGF0ZWRfYXQiLCJnZW9tZXRyeSIsImFsdGl0dWRlIiwic3BlZWQiLCJjb3Vyc2UiLCJob3Jpem9udGFsX2FjY3VyYWN5IiwidmVydGljYWxfYWNjdXJhY3kiLCJjaGFuZ2VzZXRfcmVzb3VyY2VfaWQiLCJ0aXRsZSIsImNyZWF0ZWRfbGF0aXR1ZGUiLCJjcmVhdGVkX2xvbmdpdHVkZSIsImNyZWF0ZWRfYWx0aXR1ZGUiLCJjcmVhdGVkX2hvcml6b250YWxfYWNjdXJhY3kiLCJ1cGRhdGVkX2xhdGl0dWRlIiwidXBkYXRlZF9sb25naXR1ZGUiLCJ1cGRhdGVkX2FsdGl0dWRlIiwidXBkYXRlZF9ob3Jpem9udGFsX2FjY3VyYWN5IiwiY3JlYXRlZF9kdXJhdGlvbiIsInVwZGF0ZWRfZHVyYXRpb24iLCJlZGl0ZWRfZHVyYXRpb24iLCJzeXN0ZW1Gb3JtRnVsbFZpZXdDb2x1bW5zIiwiY2xvbmUiLCJmb3JtX3ZhbHVlcyIsInJlY29yZF9pbmRleCIsInJlY29yZF9pbmRleF90ZXh0Iiwic3lzdGVtUmVwZWF0YWJsZVZpZXdDb2x1bW5zIiwicmVzb3VyY2VfaWQiLCJwYXJlbnRfcmVzb3VyY2VfaWQiLCJyZWNvcmRfcHJvamVjdF9yZXNvdXJjZV9pZCIsInJlY29yZF9hc3NpZ25lZF90b19yZXNvdXJjZV9pZCIsInJlY29yZF9zdGF0dXMiLCJpbmRleCIsInN5c3RlbVJlcGVhdGFibGVGdWxsVmlld0NvbHVtbnMiLCJzeXN0ZW1WYWx1ZXNWaWV3Q29sdW1ucyIsImtleSIsInRleHRfdmFsdWUiLCJzeXN0ZW1Gb3JtVGFibGVJbmRleGVzIiwiY29sdW1ucyIsIm1ldGhvZCIsInVuaXF1ZSIsInN5c3RlbVJlcGVhdGFibGVUYWJsZUluZGV4ZXMiLCJzeXN0ZW1WYWx1ZXNUYWJsZUluZGV4ZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxTQUFTLEVBQWY7O0FBRUFBLE9BQU9DLHNCQUFQLEdBQWdDLENBQzlCO0FBQ0VDLFFBQU0sSUFEUjtBQUVFQyxRQUFNO0FBRlIsQ0FEOEIsRUFJM0I7QUFDREQsUUFBTSxXQURMO0FBRURDLFFBQU0sU0FGTDtBQUdEQyxhQUFXO0FBSFYsQ0FKMkIsRUFRM0I7QUFDREYsUUFBTSxvQkFETDtBQUVEQyxRQUFNLFFBRkw7QUFHREMsYUFBVztBQUhWLENBUjJCLEVBWTNCO0FBQ0RGLFFBQU0sWUFETDtBQUVEQyxRQUFNO0FBRkwsQ0FaMkIsRUFlM0I7QUFDREQsUUFBTSxxQkFETDtBQUVEQyxRQUFNO0FBRkwsQ0FmMkIsRUFrQjNCO0FBQ0RELFFBQU0sZ0JBREw7QUFFREMsUUFBTTtBQUZMLENBbEIyQixFQXFCM0I7QUFDREQsUUFBTSx5QkFETDtBQUVEQyxRQUFNO0FBRkwsQ0FyQjJCLEVBd0IzQjtBQUNERCxRQUFNLFFBREw7QUFFREMsUUFBTTtBQUZMLENBeEIyQixFQTJCM0I7QUFDREQsUUFBTSxVQURMO0FBRURDLFFBQU07QUFGTCxDQTNCMkIsRUE4QjNCO0FBQ0RELFFBQU0sV0FETDtBQUVEQyxRQUFNO0FBRkwsQ0E5QjJCLEVBaUMzQjtBQUNERCxRQUFNLFlBREw7QUFFREMsUUFBTSxXQUZMO0FB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RUFQb0MsRUFRcEMsRUFBRUQsU0FBUyxDQUFFLDRCQUFGLENBQVgsRUFBNkNDLFFBQVEsT0FBckQsRUFSb0MsRUFTcEMsRUFBRUQsU0FBUyxDQUFFLGdDQUFGLENBQVgsRUFBaURDLFFBQVEsT0FBekQsRUFUb0MsRUFVcEMsRUFBRUQsU0FBUyxDQUFFLHVCQUFGLENBQVgsRUFBd0NDLFFBQVEsT0FBaEQsRUFWb0MsQ0FBdEM7O0FBYUExRCxPQUFPNkQsd0JBQVAsR0FBa0MsQ0FDaEMsRUFBRUosU0FBUyxDQUFFLG9CQUFGLENBQVgsRUFBcUNDLFFBQVEsT0FBN0MsRUFEZ0MsRUFFaEMsRUFBRUQsU0FBUyxDQUFFLG9CQUFGLENBQVgsRUFBcUNDLFFBQVEsT0FBN0MsRUFGZ0MsRUFHaEMsRUFBRUQsU0FBUyxDQUFFLFlBQUYsQ0FBWCxFQUE2QkMsUUFBUSxPQUFyQyxFQUhnQyxFQUloQyxFQUFFRCxTQUFTLENBQUUsS0FBRixDQUFYLEVBQXNCQyxRQUFRLE9BQTlCLEVBSmdDLENBQWxDOztrQkFPZTFELE0iLCJmaWxlIjoicG9zdGdyZXMtc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNvbnN0IFNjaGVtYSA9IHt9O1xuXG5TY2hlbWEuc3lzdGVtRm9ybVRhYmxlQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgdHlwZTogJ3BrJ1xuICB9LCB7XG4gICAgbmFtZTogJ3JlY29yZF9pZCcsXG4gICAgdHlwZTogJ2ludGVnZXInLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdwcm9qZWN0X2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfSwge1xuICAgIG5hbWU6ICdwcm9qZWN0X3Jlc291cmNlX2lkJyxcbiAgICB0eXBlOiAnc3RyaW5nJ1xuICB9LCB7XG4gICAgbmFtZTogJ2Fzc2lnbmVkX3RvX2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfSwge1xuICAgIG5hbWU6ICdhc3NpZ25lZF90b19yZXNvdXJjZV9pZCcsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfSwge1xuICAgIG5hbWU6ICdzdGF0dXMnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAnbGF0aXR1ZGUnLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnbG9uZ2l0dWRlJyxcbiAgICB0eXBlOiAnZG91YmxlJ1xuICB9LCB7XG4gICAgbmFtZTogJ2NyZWF0ZWRfYXQnLFxuICAgIHR5cGU6ICd0aW1lc3RhbXAnLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2F0JyxcbiAgICB0eXBlOiAndGltZXN0YW1wJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sIHtcbiAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgdHlwZTogJ2ludGVnZXInLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2J5X2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LCB7XG4gICAgbmFtZTogJ2NyZWF0ZWRfYnlfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9ieV9pZCcsXG4gICAgdHlwZTogJ2ludGVnZXInLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2J5X3Jlc291cmNlX2lkJyxcbiAgICB0eXBlOiAnc3RyaW5nJ1xuICB9LCB7XG4gICAgbmFtZTogJ3NlcnZlcl9jcmVhdGVkX2F0JyxcbiAgICB0eXBlOiAndGltZXN0YW1wJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sIHtcbiAgICBuYW1lOiAnc2VydmVyX3VwZGF0ZWRfYXQnLFxuICAgIHR5cGU6ICd0aW1lc3RhbXAnLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfaW5kZXhfdGV4dCcsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfaW5kZXgnLFxuICAgIHR5cGU6ICdmdHMnXG4gIH0sIHtcbiAgICBuYW1lOiAnZ2VvbWV0cnknLFxuICAgIHR5cGU6ICdnZW9tZXRyeSdcbiAgfSwge1xuICAgIG5hbWU6ICdhbHRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdzcGVlZCcsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjb3Vyc2UnLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnaG9yaXpvbnRhbF9hY2N1cmFjeScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd2ZXJ0aWNhbF9hY2N1cmFjeScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdmb3JtX3ZhbHVlcycsXG4gICAgdHlwZTogJ3RleHQnXG4gIH0sIHtcbiAgICBuYW1lOiAnY2hhbmdlc2V0X2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfSwge1xuICAgIG5hbWU6ICdjaGFuZ2VzZXRfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAnY3JlYXRlZF9sYXRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2xvbmdpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2dlb21ldHJ5JyxcbiAgICB0eXBlOiAnZ2VvbWV0cnknXG4gIH0sIHtcbiAgICBuYW1lOiAnY3JlYXRlZF9hbHRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2hvcml6b250YWxfYWNjdXJhY3knLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9sYXRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2xvbmdpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2dlb21ldHJ5JyxcbiAgICB0eXBlOiAnZ2VvbWV0cnknXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9hbHRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2hvcml6b250YWxfYWNjdXJhY3knLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnY3JlYXRlZF9kdXJhdGlvbicsXG4gICAgdHlwZTogJ2ludGVnZXInXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9kdXJhdGlvbicsXG4gICAgdHlwZTogJ2ludGVnZXInXG4gIH0sIHtcbiAgICBuYW1lOiAnZWRpdGVkX2R1cmF0aW9uJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfVxuXTtcblxuU2NoZW1hLnN5c3RlbVZhbHVlc1RhYmxlQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgdHlwZTogJ3BrJ1xuICB9LCB7XG4gICAgbmFtZTogJ3JlY29yZF9pZCcsXG4gICAgdHlwZTogJ2ludGVnZXInLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAncGFyZW50X3Jlc291cmNlX2lkJyxcbiAgICB0eXBlOiAnc3RyaW5nJ1xuICB9LCB7XG4gICAgbmFtZTogJ2tleScsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LCB7XG4gICAgbmFtZTogJ3RleHRfdmFsdWUnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAnbnVtYmVyX3ZhbHVlJyxcbiAgICB0eXBlOiAnZG91YmxlJ1xuICB9XG5dO1xuXG5TY2hlbWEuc3lzdGVtUmVwZWF0YWJsZVRhYmxlQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgdHlwZTogJ3BrJ1xuICB9LCB7XG4gICAgbmFtZTogJ3Jlc291cmNlX2lkJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sIHtcbiAgICBuYW1lOiAncmVjb3JkX2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LCB7XG4gICAgbmFtZTogJ3JlY29yZF9yZXNvdXJjZV9pZCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LCB7XG4gICAgbmFtZTogJ3BhcmVudF9yZXNvdXJjZV9pZCcsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfcHJvamVjdF9pZCcsXG4gICAgdHlwZTogJ2ludGVnZXInXG4gIH0sIHtcbiAgICBuYW1lOiAncmVjb3JkX3Byb2plY3RfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAncmVjb3JkX2Fzc2lnbmVkX3RvX2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfYXNzaWduZWRfdG9fcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAncmVjb3JkX3N0YXR1cycsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfSwge1xuICAgIG5hbWU6ICdpbmRleCcsIC8vIFRPRE8oemhtKSBtYWtlIHRoaXMgd29yayBpbiB0aGUgYXBwXG4gICAgdHlwZTogJ2ludGVnZXInXG4gIH0sIHtcbiAgICBuYW1lOiAnbGF0aXR1ZGUnLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnbG9uZ2l0dWRlJyxcbiAgICB0eXBlOiAnZG91YmxlJ1xuICB9LCB7XG4gICAgbmFtZTogJ2NyZWF0ZWRfYXQnLFxuICAgIHR5cGU6ICd0aW1lc3RhbXAnLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2F0JyxcbiAgICB0eXBlOiAndGltZXN0YW1wJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sIHtcbiAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgdHlwZTogJ2ludGVnZXInLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2J5X2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9LCB7XG4gICAgbmFtZTogJ2NyZWF0ZWRfYnlfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9ieV9pZCcsXG4gICAgdHlwZTogJ2ludGVnZXInLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2J5X3Jlc291cmNlX2lkJyxcbiAgICB0eXBlOiAnc3RyaW5nJ1xuICB9LCB7XG4gICAgbmFtZTogJ3NlcnZlcl9jcmVhdGVkX2F0JyxcbiAgICB0eXBlOiAndGltZXN0YW1wJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sIHtcbiAgICBuYW1lOiAnc2VydmVyX3VwZGF0ZWRfYXQnLFxuICAgIHR5cGU6ICd0aW1lc3RhbXAnLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfaW5kZXhfdGV4dCcsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfSwge1xuICAgIG5hbWU6ICdyZWNvcmRfaW5kZXgnLFxuICAgIHR5cGU6ICdmdHMnXG4gIH0sIHtcbiAgICBuYW1lOiAnZ2VvbWV0cnknLFxuICAgIHR5cGU6ICdnZW9tZXRyeSdcbiAgfSwge1xuICAgIG5hbWU6ICdhbHRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdzcGVlZCcsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjb3Vyc2UnLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnaG9yaXpvbnRhbF9hY2N1cmFjeScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd2ZXJ0aWNhbF9hY2N1cmFjeScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdmb3JtX3ZhbHVlcycsXG4gICAgdHlwZTogJ3RleHQnXG4gIH0sIHtcbiAgICBuYW1lOiAnY2hhbmdlc2V0X2lkJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfSwge1xuICAgIG5hbWU6ICdjaGFuZ2VzZXRfcmVzb3VyY2VfaWQnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAnY3JlYXRlZF9sYXRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2xvbmdpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2dlb21ldHJ5JyxcbiAgICB0eXBlOiAnZ2VvbWV0cnknXG4gIH0sIHtcbiAgICBuYW1lOiAnY3JlYXRlZF9hbHRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjcmVhdGVkX2hvcml6b250YWxfYWNjdXJhY3knLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9sYXRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2xvbmdpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2dlb21ldHJ5JyxcbiAgICB0eXBlOiAnZ2VvbWV0cnknXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9hbHRpdHVkZScsXG4gICAgdHlwZTogJ2RvdWJsZSdcbiAgfSwge1xuICAgIG5hbWU6ICd1cGRhdGVkX2hvcml6b250YWxfYWNjdXJhY3knLFxuICAgIHR5cGU6ICdkb3VibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnY3JlYXRlZF9kdXJhdGlvbicsXG4gICAgdHlwZTogJ2ludGVnZXInXG4gIH0sIHtcbiAgICBuYW1lOiAndXBkYXRlZF9kdXJhdGlvbicsXG4gICAgdHlwZTogJ2ludGVnZXInXG4gIH0sIHtcbiAgICBuYW1lOiAnZWRpdGVkX2R1cmF0aW9uJyxcbiAgICB0eXBlOiAnaW50ZWdlcidcbiAgfVxuXTtcblxuU2NoZW1hLnN5c3RlbUZvcm1WaWV3Q29sdW1ucyA9IHtcbiAgcmVjb3JkX3Jlc291cmNlX2lkOiAncmVjb3JkX2lkJyxcbiAgcHJvamVjdF9yZXNvdXJjZV9pZDogJ3Byb2plY3RfaWQnLFxuICBhc3NpZ25lZF90b19yZXNvdXJjZV9pZDogJ2Fzc2lnbmVkX3RvX2lkJyxcbiAgc3RhdHVzOiAnc3RhdHVzJyxcbiAgbGF0aXR1ZGU6ICdsYXRpdHVkZScsXG4gIGxvbmdpdHVkZTogJ2xvbmdpdHVkZScsXG4gIGNyZWF0ZWRfYXQ6ICdjcmVhdGVkX2F0JyxcbiAgdXBkYXRlZF9hdDogJ3VwZGF0ZWRfYXQnLFxuICB2ZXJzaW9uOiAndmVyc2lvbicsXG4gIGNyZWF0ZWRfYnlfcmVzb3VyY2VfaWQ6ICdjcmVhdGVkX2J5X2lkJyxcbiAgdXBkYXRlZF9ieV9yZXNvdXJjZV9pZDogJ3VwZGF0ZWRfYnlfaWQnLFxuICBzZXJ2ZXJfY3JlYXRlZF9hdDogJ3NlcnZlcl9jcmVhdGVkX2F0JyxcbiAgc2VydmVyX3VwZGF0ZWRfYXQ6ICdzZXJ2ZXJfdXBkYXRlZF9hdCcsXG4gIGdlb21ldHJ5OiAnZ2VvbWV0cnknLFxuICBhbHRpdHVkZTogJ2FsdGl0dWRlJyxcbiAgc3BlZWQ6ICdzcGVlZCcsXG4gIGNvdXJzZTogJ2NvdXJzZScsXG4gIGhvcml6b250YWxfYWNjdXJhY3k6ICdob3Jpem9udGFsX2FjY3VyYWN5JyxcbiAgdmVydGljYWxfYWNjdXJhY3k6ICd2ZXJ0aWNhbF9hY2N1cmFjeScsXG4gIGNoYW5nZXNldF9yZXNvdXJjZV9pZDogJ2NoYW5nZXNldF9pZCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICBjcmVhdGVkX2xhdGl0dWRlOiAnY3JlYXRlZF9sYXRpdHVkZScsXG4gIGNyZWF0ZWRfbG9uZ2l0dWRlOiAnY3JlYXRlZF9sb25naXR1ZGUnLFxuICBjcmVhdGVkX2FsdGl0dWRlOiAnY3JlYXRlZF9hbHRpdHVkZScsXG4gIGNyZWF0ZWRfaG9yaXpvbnRhbF9hY2N1cmFjeTogJ2NyZWF0ZWRfaG9yaXpvbnRhbF9hY2N1cmFjeScsXG4gIHVwZGF0ZWRfbGF0aXR1ZGU6ICd1cGRhdGVkX2xhdGl0dWRlJyxcbiAgdXBkYXRlZF9sb25naXR1ZGU6ICd1cGRhdGVkX2xvbmdpdHVkZScsXG4gIHVwZGF0ZWRfYWx0aXR1ZGU6ICd1cGRhdGVkX2FsdGl0dWRlJyxcbiAgdXBkYXRlZF9ob3Jpem9udGFsX2FjY3VyYWN5OiAndXBkYXRlZF9ob3Jpem9udGFsX2FjY3VyYWN5JyxcbiAgY3JlYXRlZF9kdXJhdGlvbjogJ2NyZWF0ZWRfZHVyYXRpb24nLFxuICB1cGRhdGVkX2R1cmF0aW9uOiAndXBkYXRlZF9kdXJhdGlvbicsXG4gIGVkaXRlZF9kdXJhdGlvbjogJ2VkaXRlZF9kdXJhdGlvbidcbn07XG5cblNjaGVtYS5zeXN0ZW1Gb3JtRnVsbFZpZXdDb2x1bW5zID0gXy5jbG9uZShTY2hlbWEuc3lzdGVtRm9ybVZpZXdDb2x1bW5zKTtcblNjaGVtYS5zeXN0ZW1Gb3JtRnVsbFZpZXdDb2x1bW5zLmZvcm1fdmFsdWVzID0gJ2Zvcm1fdmFsdWVzJztcblNjaGVtYS5zeXN0ZW1Gb3JtRnVsbFZpZXdDb2x1bW5zLnJlY29yZF9pbmRleCA9ICdyZWNvcmRfaW5kZXgnO1xuU2NoZW1hLnN5c3RlbUZvcm1GdWxsVmlld0NvbHVtbnMucmVjb3JkX2luZGV4X3RleHQgPSAncmVjb3JkX2luZGV4X3RleHQnO1xuXG5TY2hlbWEuc3lzdGVtUmVwZWF0YWJsZVZpZXdDb2x1bW5zID0ge1xuICByZXNvdXJjZV9pZDogJ2NoaWxkX3JlY29yZF9pZCcsXG4gIHJlY29yZF9yZXNvdXJjZV9pZDogJ3JlY29yZF9pZCcsXG4gIHBhcmVudF9yZXNvdXJjZV9pZDogJ3BhcmVudF9pZCcsXG4gIHJlY29yZF9wcm9qZWN0X3Jlc291cmNlX2lkOiAncmVjb3JkX3Byb2plY3RfaWQnLFxuICByZWNvcmRfYXNzaWduZWRfdG9fcmVzb3VyY2VfaWQ6ICdyZWNvcmRfYXNzaWduZWRfdG9faWQnLFxuICByZWNvcmRfc3RhdHVzOiAncmVjb3JkX3N0YXR1cycsXG4gIGluZGV4OiAnaW5kZXgnLFxuICBsYXRpdHVkZTogJ2xhdGl0dWRlJyxcbiAgbG9uZ2l0dWRlOiAnbG9uZ2l0dWRlJyxcbiAgY3JlYXRlZF9hdDogJ2NyZWF0ZWRfYXQnLFxuICB1cGRhdGVkX2F0OiAndXBkYXRlZF9hdCcsXG4gIHZlcnNpb246ICd2ZXJzaW9uJyxcbiAgY3JlYXRlZF9ieV9yZXNvdXJjZV9pZDogJ2NyZWF0ZWRfYnlfaWQnLFxuICB1cGRhdGVkX2J5X3Jlc291cmNlX2lkOiAndXBkYXRlZF9ieV9pZCcsXG4gIHNlcnZlcl9jcmVhdGVkX2F0OiAnc2VydmVyX2NyZWF0ZWRfYXQnLFxuICBzZXJ2ZXJfdXBkYXRlZF9hdDogJ3NlcnZlcl91cGRhdGVkX2F0JyxcbiAgZ2VvbWV0cnk6ICdnZW9tZXRyeScsXG4gIGNoYW5nZXNldF9yZXNvdXJjZV9pZDogJ2NoYW5nZXNldF9pZCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICBjcmVhdGVkX2xhdGl0dWRlOiAnY3JlYXRlZF9sYXRpdHVkZScsXG4gIGNyZWF0ZWRfbG9uZ2l0dWRlOiAnY3JlYXRlZF9sb25naXR1ZGUnLFxuICBjcmVhdGVkX2FsdGl0dWRlOiAnY3JlYXRlZF9hbHRpdHVkZScsXG4gIGNyZWF0ZWRfaG9yaXpvbnRhbF9hY2N1cmFjeTogJ2NyZWF0ZWRfaG9yaXpvbnRhbF9hY2N1cmFjeScsXG4gIHVwZGF0ZWRfbGF0aXR1ZGU6ICd1cGRhdGVkX2xhdGl0dWRlJyxcbiAgdXBkYXRlZF9sb25naXR1ZGU6ICd1cGRhdGVkX2xvbmdpdHVkZScsXG4gIHVwZGF0ZWRfYWx0aXR1ZGU6ICd1cGRhdGVkX2FsdGl0dWRlJyxcbiAgdXBkYXRlZF9ob3Jpem9udGFsX2FjY3VyYWN5OiAndXBkYXRlZF9ob3Jpem9udGFsX2FjY3VyYWN5JyxcbiAgY3JlYXRlZF9kdXJhdGlvbjogJ2NyZWF0ZWRfZHVyYXRpb24nLFxuICB1cGRhdGVkX2R1cmF0aW9uOiAndXBkYXRlZF9kdXJhdGlvbicsXG4gIGVkaXRlZF9kdXJhdGlvbjogJ2VkaXRlZF9kdXJhdGlvbidcbn07XG5cblNjaGVtYS5zeXN0ZW1SZXBlYXRhYmxlRnVsbFZpZXdDb2x1bW5zID0gXy5jbG9uZShTY2hlbWEuc3lzdGVtUmVwZWF0YWJsZVZpZXdDb2x1bW5zKTtcblNjaGVtYS5zeXN0ZW1SZXBlYXRhYmxlRnVsbFZpZXdDb2x1bW5zLmZvcm1fdmFsdWVzID0gJ2Zvcm1fdmFsdWVzJztcblNjaGVtYS5zeXN0ZW1SZXBlYXRhYmxlRnVsbFZpZXdDb2x1bW5zLnJlY29yZF9pbmRleCA9ICdyZWNvcmRfaW5kZXgnO1xuU2NoZW1hLnN5c3RlbVJlcGVhdGFibGVGdWxsVmlld0NvbHVtbnMucmVjb3JkX2luZGV4X3RleHQgPSAncmVjb3JkX2luZGV4X3RleHQnO1xuXG5TY2hlbWEuc3lzdGVtVmFsdWVzVmlld0NvbHVtbnMgPSB7XG4gIHJlY29yZF9yZXNvdXJjZV9pZDogJ3JlY29yZF9pZCcsXG4gIHBhcmVudF9yZXNvdXJjZV9pZDogJ2NoaWxkX3JlY29yZF9pZCcsXG4gIGtleTogJ2tleScsXG4gIHRleHRfdmFsdWU6ICd0ZXh0X3ZhbHVlJ1xufTtcblxuU2NoZW1hLnN5c3RlbUZvcm1UYWJsZUluZGV4ZXMgPSBbXG4gIHsgY29sdW1uczogWyAncmVjb3JkX3Jlc291cmNlX2lkJyBdLCBtZXRob2Q6ICdidHJlZScsIHVuaXF1ZTogdHJ1ZSB9LFxuICB7IGNvbHVtbnM6IFsgJ2dlb21ldHJ5JyBdLCBtZXRob2Q6ICdnaXN0JyB9LFxuICB7IGNvbHVtbnM6IFsgJ3JlY29yZF9pbmRleCcgXSwgbWV0aG9kOiAnZ2luJyB9LFxuICB7IGNvbHVtbnM6IFsgJ3N0YXR1cycgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAnc2VydmVyX3VwZGF0ZWRfYXQnIF0sIG1ldGhvZDogJ2J0cmVlJyB9LFxuICB7IGNvbHVtbnM6IFsgJ3Byb2plY3RfcmVzb3VyY2VfaWQnIF0sIG1ldGhvZDogJ2J0cmVlJyB9LFxuICB7IGNvbHVtbnM6IFsgJ2Fzc2lnbmVkX3RvX3Jlc291cmNlX2lkJyBdLCBtZXRob2Q6ICdidHJlZScgfSxcbiAgeyBjb2x1bW5zOiBbICdjaGFuZ2VzZXRfcmVzb3VyY2VfaWQnIF0sIG1ldGhvZDogJ2J0cmVlJyB9XG5dO1xuXG5TY2hlbWEuc3lzdGVtUmVwZWF0YWJsZVRhYmxlSW5kZXhlcyA9IFtcbiAgeyBjb2x1bW5zOiBbICdyZXNvdXJjZV9pZCcgXSwgbWV0aG9kOiAnYnRyZWUnLCB1bmlxdWU6IHRydWUgfSxcbiAgeyBjb2x1bW5zOiBbICdyZWNvcmRfcmVzb3VyY2VfaWQnIF0sIG1ldGhvZDogJ2J0cmVlJyB9LFxuICB7IGNvbHVtbnM6IFsgJ3BhcmVudF9yZXNvdXJjZV9pZCcgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAnZ2VvbWV0cnknIF0sIG1ldGhvZDogJ2dpc3QnIH0sXG4gIHsgY29sdW1uczogWyAncmVjb3JkX2luZGV4JyBdLCBtZXRob2Q6ICdnaW4nIH0sXG4gIHsgY29sdW1uczogWyAncmVjb3JkX3N0YXR1cycgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAndXBkYXRlZF9hdCcgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAncmVjb3JkX3Byb2plY3RfcmVzb3VyY2VfaWQnIF0sIG1ldGhvZDogJ2J0cmVlJyB9LFxuICB7IGNvbHVtbnM6IFsgJ3JlY29yZF9hc3NpZ25lZF90b19yZXNvdXJjZV9pZCcgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAnY2hhbmdlc2V0X3Jlc291cmNlX2lkJyBdLCBtZXRob2Q6ICdidHJlZScgfVxuXTtcblxuU2NoZW1hLnN5c3RlbVZhbHVlc1RhYmxlSW5kZXhlcyA9IFtcbiAgeyBjb2x1bW5zOiBbICdyZWNvcmRfcmVzb3VyY2VfaWQnIF0sIG1ldGhvZDogJ2J0cmVlJyB9LFxuICB7IGNvbHVtbnM6IFsgJ3BhcmVudF9yZXNvdXJjZV9pZCcgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAndGV4dF92YWx1ZScgXSwgbWV0aG9kOiAnYnRyZWUnIH0sXG4gIHsgY29sdW1uczogWyAna2V5JyBdLCBtZXRob2Q6ICdidHJlZScgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hO1xuIl19