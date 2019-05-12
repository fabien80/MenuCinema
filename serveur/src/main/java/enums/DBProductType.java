package enums;

public enum DBProductType {
	Nourriture("Nourriture"), Menu("Menu"), Film("Film"), All("All");

	private final String dbProductType;

	DBProductType (String dbProductType) {
		this.dbProductType = dbProductType;
	}

	public String getDbProductType () {
		return dbProductType;
	}

	public static DBProductType fromValue (String v) {
		for (DBProductType c : DBProductType.values()) {
			if (c.dbProductType.equals(v)) {
				return c;
			}
		}
		throw new IllegalArgumentException(v);
	}

	@Override
	public String toString () {
		return dbProductType;
	}
}
