var searchIndex = JSON.parse('{\
"pubgrub":{"doc":"PubGrub version solving algorithm.","t":"AAAAAAAAANNNNNENLLLLLLLLLLLMMMMMIDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDEDNENNNNQINLLLLLLLLMMLLLLLLLLLLLLLLLLLLLKLMLMLLLLLLLLLLLLLLLLEINDNLLLLLKLFLLLLLLLLKLLLLLFLLLLLLLLLLNNELLLLLLLLLLLLLLLGGGNDNDIELLLLLLKLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLKLLLLLLLLLLLLLLLLLLLLLLMMMMQIKKKLKKL","n":["error","package","range","report","solver","term","type_aliases","version","version_set","ErrorChoosingPackageVersion","ErrorInShouldCancel","ErrorRetrievingDependencies","Failure","NoSolution","PubGrubError","SelfDependency","borrow","borrow_mut","fmt","fmt","from","into","source","to_string","try_from","try_into","type_id","package","package","source","version","version","Package","Range","between","borrow","borrow_mut","bounding_range","clone","clone_into","complement","complement","contains","contains","empty","empty","eq","fmt","fmt","from","from_range_bounds","full","full","hash","higher_than","intersection","intersection","into","lower_than","singleton","singleton","strictly_higher_than","strictly_lower_than","to_owned","to_string","try_from","try_into","type_id","union","union","DefaultStringReporter","DerivationTree","Derived","Derived","External","External","FromDependencyOf","NoVersions","NotRoot","Output","Reporter","UnavailableDependencies","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cause1","cause2","clone","clone","clone","clone_into","clone_into","clone_into","collapse_no_versions","fmt","fmt","fmt","fmt","from","from","from","from","into","into","into","into","report","report","shared_id","string_terms","terms","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","Dependencies","DependencyProvider","Known","OfflineDependencyProvider","Unknown","add_dependencies","borrow","borrow","borrow_mut","borrow_mut","choose_package_version","choose_package_version","choose_package_with_fewest_versions","clone","clone","clone_into","clone_into","default","fmt","from","from","get_dependencies","get_dependencies","into","into","new","packages","resolve","should_cancel","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","versions","Negative","Positive","Term","as_ref","borrow","borrow_mut","clone","clone_into","eq","fmt","fmt","from","into","to_owned","to_string","try_from","try_into","type_id","DependencyConstraints","Map","SelectedDependencies","NotThreeParts","NumberVersion","ParseIntError","SemanticVersion","Version","VersionParseError","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","bump","bump","bump","bump_major","bump_minor","bump_patch","clone","clone","clone_into","clone_into","cmp","cmp","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from_str","hash","hash","into","into","into","lowest","lowest","lowest","new","one","partial_cmp","partial_cmp","to_owned","to_owned","to_string","to_string","to_string","try_from","try_from","try_from","try_into","try_into","try_into","two","type_id","type_id","type_id","zero","full_version","full_version","parse_error","version_part","V","VersionSet","complement","contains","empty","full","intersection","singleton","union"],"q":[[0,"pubgrub"],[9,"pubgrub::error"],[27,"pubgrub::error::PubGrubError"],[32,"pubgrub::package"],[33,"pubgrub::range"],[70,"pubgrub::report"],[132,"pubgrub::solver"],[170,"pubgrub::term"],[188,"pubgrub::type_aliases"],[191,"pubgrub::version"],[262,"pubgrub::version::VersionParseError"],[266,"pubgrub::version_set"],[275,"core::fmt"],[276,"core::fmt"],[277,"core::option"],[278,"alloc::string"],[279,"core::result"],[280,"core::any"],[281,"core::convert"],[282,"core::ops::range"],[283,"core::cmp"],[284,"core::clone"],[285,"core::cmp"],[286,"core::hash"],[287,"alloc::boxed"],[288,"core::iter::traits::iterator"],[289,"core::borrow"],[290,"core::ops::function"],[291,"core::default"],[292,"core::cmp"]],"d":["Handling pubgrub errors.","Trait for identifying packages. Automatically implemented …","Ranges are constraints defining sets of versions.","Build a report as clear as possible as to why dependency …","PubGrub version solving algorithm.","A term is the fundamental unit of operation of the PubGrub …","Publicly exported type aliases.","Traits and implementations to create and compare versions.","As its name suggests, the VersionSet trait describes sets …","Error arising when the implementer of DependencyProvider …","Error arising when the implementer of DependencyProvider …","Error arising when the implementer of DependencyProvider …","Something unexpected happened.","There is no solution for this set of dependencies.","Errors that may occur while solving dependencies.","Error arising when the implementer of DependencyProvider …","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","Package whose dependencies we want.","Package whose dependencies we want.","Error raised by the implementer of DependencyProvider.","Version of the package for which we want the dependencies.","Version of the package for which we want the dependencies.","Trait for identifying packages. Automatically implemented …","A Range represents multiple intervals of a continuous …","Set of versions greater or equal to <code>v1</code> but less than <code>v2</code>.","","","Convert to something that can be used with BTreeMap::range.","","","Returns the complement of this Range.","","","Returns true if the this Range contains the specified …","Empty set of versions.","","","","","Returns the argument unchanged.","Construct a simple range from anything that impls …","Set of all possible versions","","","Set of all versions higher or equal to some version","","Computes the intersection of two sets of versions.","Calls <code>U::from(self)</code>.","Set of all versions lower or equal to some version","Set containing exactly one version","","Set of all versions higher to some version","Set of all versions lower to some version","","","","","","Computes the union of this <code>Range</code> and another.","","Default reporter able to generate an explanation as a …","Derivation tree resulting in the impossibility to solve …","Incompatibility derived from two others.","Incompatibility derived from two others.","Incompatibilities that are not derived from others, they …","External incompatibility.","Incompatibility coming from the dependencies of a given …","There are no versions in the given set for this package.","Initial incompatibility aiming at picking the root package …","Output type of the report.","Reporter trait.","Dependencies of the package are unavailable for versions …","","","","","","","","","First cause.","Second cause.","","","","","","","Merge the NoVersions external incompatibilities with the …","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Generate a report from the derivation tree describing the …","","Indicate if that incompatibility is present multiple times …","Try to print terms of an incompatibility in a …","Terms of the incompatibility.","","","","","","","","","","","","","","","","","An enum used by DependencyProvider that holds information …","Trait that allows the algorithm to retrieve available …","Container for all available package versions.","A basic implementation of DependencyProvider.","Package dependencies are unavailable.","Registers the dependencies of a package and version pair. …","","","","","Decision making is the process of choosing the next package","","This is a helper function to make it easy to implement …","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Retrieves the package dependencies. Return …","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Creates an empty OfflineDependencyProvider with no …","Lists packages that have been saved.","Main function of the library. Finds a set of packages …","This is called fairly regularly during the resolution, if …","","","","","","","","","Lists versions of saved packages in sorted order. Returns …","The term “not v &lt; 3.0.0” is a negative expression that …","For example, “1.0.0 &lt;= v &lt; 2.0.0” is a positive …","A positive or negative expression regarding a set of …","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","Holds information about all possible versions a given …","Map implementation used by the library.","Concrete dependencies picked by the library during resolve …","SemanticVersion must contain major, minor, patch versions.","Simplest versions possible, just a positive number.","Wrapper around ParseIntError.","Type for semantic versions: major.minor.patch.","Versions have a minimal version (a “0” version) and …","Error creating SemanticVersion from String.","","","","","","","Returns the next version, the smallest strictly higher …","","","Bump the major number of a version.","Bump the minor number of a version.","Bump the patch number of a version.","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","Returns the argument unchanged.","","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the lowest version.","","","Create a version with “major”, “minor” and “patch…","Version 1.0.0.","","","","","","","","","","","","","","Version 2.0.0.","","","","Version 0.0.0.","SemanticVersion that was being parsed.","SemanticVersion that was being parsed.","A specific error resulted from parsing a part of the …","A version part where parsing failed.","Version type associated with the sets manipulated.","Trait describing sets of versions.","Compute the complement of this set.","Evaluate membership of a version in this set.","Constructor for an empty set containing no version.","Constructor for the set containing all versions. …","Compute the intersection with another set.","Constructor for a set containing exactly one version.","Compute the union with another set. Thanks to set …"],"i":[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,46,47,46,46,47,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,0,0,25,0,25,26,26,26,48,0,26,49,25,26,27,49,25,26,27,27,27,25,26,27,25,26,27,25,25,26,26,27,49,25,26,27,49,25,26,27,48,49,27,49,27,25,26,27,26,49,25,26,27,49,25,26,27,49,25,26,27,0,0,36,0,36,30,36,30,36,30,39,30,0,36,30,36,30,30,30,36,30,39,30,36,30,30,30,0,39,36,30,36,30,36,30,36,30,30,28,28,0,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,0,0,0,43,0,43,0,0,0,40,43,41,40,43,41,50,40,41,40,40,40,40,41,40,41,40,41,40,43,41,40,40,43,43,41,41,40,40,40,40,43,41,41,41,41,40,40,41,40,43,41,50,40,41,40,40,40,41,40,41,40,43,41,40,43,41,40,43,41,40,40,43,41,40,51,52,52,52,6,0,6,6,6,6,6,6,6],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[[[1,[-1,-2]],2],3,[4,5],6],[[[1,[-1,-2]],2],3,[7,5],[7,6]],[-1,-1,[]],[-1,-2,[],[]],[[[1,[-1,-2]]],[[9,[8]]],5,6],[-1,10,[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,12,[]],0,0,0,0,0,0,0,[[-2,-3],[[13,[-1]]],[],[[14,[-1]]],[[14,[-1]]]],[-1,-2,[],[]],[-1,-2,[],[]],[[[13,[-1]]],[[9,[[16,[[15,[-1]],[15,[-1]]]]]]],17],[[[13,[-1]]],[[13,[-1]]],18],[[-1,-2],16,[],[]],[[[13,[-1]]],[[13,[-1]]],18],[[[13,[-1]]],[[13,[-1]]],[7,4,18,19,17]],[[[13,[-1]]],20,[7,4,18,19,17]],[[[13,[-1]],-1],20,17],[[],[[13,[-1]]],[]],[[],[[13,[-1]]],[7,4,18,19,17]],[[[13,[-1]],[13,[-1]]],20,21],[[[13,[-1]],2],3,7],[[[13,[-1]],2],3,[4,19]],[-1,-1,[]],[-3,[[13,[-1]]],17,[18,[14,[-1]]],[[22,[-2]]]],[[],[[13,[-1]]],[]],[[],[[13,[-1]]],[7,4,18,19,17]],[[[13,[-1]],-2],16,23,24],[-2,[[13,[-1]]],[],[[14,[-1]]]],[[[13,[-1]],[13,[-1]]],[[13,[-1]]],[7,4,18,19,17]],[[[13,[-1]],[13,[-1]]],[[13,[-1]]],[17,18]],[-1,-2,[],[]],[-2,[[13,[-1]]],[],[[14,[-1]]]],[-2,[[13,[-1]]],18,[[14,[-1]]]],[[],[[13,[-1]]],[7,4,18,19,17]],[-2,[[13,[-1]]],[],[[14,[-1]]]],[-2,[[13,[-1]]],[],[[14,[-1]]]],[-1,-2,[],[]],[-1,10,[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,12,[]],[[[13,[-1]],[13,[-1]]],[[13,[-1]]],[17,18]],[[[13,[-1]],[13,[-1]]],[[13,[-1]]],[7,4,18,19,17]],0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,[[[25,[-1,-2]]],[[25,[-1,-2]]],[18,5],[18,6]],[[[26,[-1,-2]]],[[26,[-1,-2]]],[18,5],[18,6]],[[[27,[-1,-2]]],[[27,[-1,-2]]],[18,5],[18,6]],[[-1,-2],16,[],[]],[[-1,-2],16,[],[]],[[-1,-2],16,[],[]],[[[25,[-1,-2]]],16,5,6],[[[25,[-1,-2]],2],3,[7,5],[7,6]],[[[26,[-1,-2]],2],3,5,6],[[[26,[-1,-2]],2],3,[7,5],[7,6]],[[[27,[-1,-2]],2],3,[7,5],[7,6]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[25,[-1,-2]]],[],[],[]],[[[25,[-1,-2]]],[],5,6],0,[[[29,[-1,[28,[-2]]]]],10,5,6],0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,10,[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,12,[]],[-1,12,[]],[-1,12,[]],[-1,12,[]],0,0,0,0,0,[[[30,[-1,-2]],-1,-3,-4],16,5,6,14,31],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[-1,-2],[[11,[[16,[-4,9]],[32,[8]]]]],[],33,[],[[34,[-3]]]],[[[30,[-1,-2]],-3],[[11,[[16,[-4,9]],[32,[8]]]]],5,6,33,[[34,[-1]]]],[[-1,-2],[[16,[-4,9]]],35,33,5,[[34,[-3]]]],[[[36,[-1,-2]]],[[36,[-1,-2]]],[18,5],[18,6]],[[[30,[-1,-2]]],[[30,[-1,-2]]],[18,5],[18,6]],[[-1,-2],16,[],[]],[[-1,-2],16,[],[]],[[],[[30,[-1,-2]]],[37,5],[37,6]],[[[30,[-1,-2]],2],3,[7,5],[7,6]],[-1,-1,[]],[-1,-1,[]],[[-1,-2],[[11,[[36,[-2,-3]],[32,[8]]]]],[],[],[]],[[[30,[-1,-2]],-1],[[11,[[36,[-1,-2]],[32,[8]]]]],5,6],[-1,-2,[],[]],[-1,-2,[],[]],[[],[[30,[-1,-2]]],5,6],[[[30,[-1,-2]]],[[0,[33]]],5,6],[[-3,-1,-4],[[11,[[38,[-1]],[1,[-1,-2]]]]],5,6,[[39,[-1,-2]]],14],[-1,[[11,[16,[32,[8]]]]],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,12,[]],[-1,12,[]],[[[30,[-1,-2]],-1],[[9,[[0,[33]]]]],5,6],0,0,0,[[[28,[-1]]],[[28,[-1]]],6],[-1,-2,[],[]],[-1,-2,[],[]],[[[28,[-1]]],[[28,[-1]]],[18,6]],[[-1,-2],16,[],[]],[[[28,[-1]],[28,[-1]]],20,[21,6]],[[[28,[-1]],2],3,[6,4]],[[[28,[-1]],2],3,[7,6]],[-1,-1,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,10,[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,12,[]],0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-1,[]],[40,40],[41,41],[40,40],[40,40],[40,40],[40,40],[41,41],[[-1,-2],16,[],[]],[[-1,-2],16,[],[]],[[40,40],42],[[41,41],42],[[40,40],20],[[43,43],20],[[41,41],20],[[40,2],3],[[40,2],3],[[43,2],3],[[43,2],3],[[41,2],3],[[41,2],3],[[[16,[44,44,44]]],40],[-1,-1,[]],[40,40],[[[16,[44,44,44]]],40],[-1,-1,[]],[44,41],[-1,-1,[]],[44,41],[41,41],[45,[[11,[40]]]],[[40,-1],16,24],[[41,-1],16,24],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[],-1,[]],[[],40],[[],41],[[44,44,44],40],[[],40],[[40,40],[[9,[42]]]],[[41,41],[[9,[42]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,10,[]],[-1,10,[]],[-1,10,[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[-1,[[11,[-2]]],[],[]],[[],40],[-1,12,[]],[-1,12,[]],[-1,12,[]],[[],40],0,0,0,0,0,0,[-1,-1,[]],[-1,20,[]],[[],-1,[]],[[],-1,[]],[[-1,-1],-1,[]],[[],-1,[]],[[-1,-1],-1,[]]],"c":[],"p":[[4,"PubGrubError",9],[3,"Formatter",275],[6,"Result",275],[8,"Display",275],[8,"Package",32],[8,"VersionSet",266],[8,"Debug",275],[8,"Error",276],[4,"Option",277],[3,"String",278],[4,"Result",279],[3,"TypeId",280],[3,"Range",33],[8,"Into",281],[4,"Bound",282],[15,"tuple"],[8,"Ord",283],[8,"Clone",284],[8,"Eq",283],[15,"bool"],[8,"PartialEq",283],[8,"RangeBounds",282],[8,"Hash",285],[8,"Hasher",285],[4,"DerivationTree",70],[4,"External",70],[3,"Derived",70],[4,"Term",170],[6,"Map",188],[3,"OfflineDependencyProvider",132],[8,"IntoIterator",286],[3,"Box",287],[8,"Iterator",288],[8,"Borrow",289],[8,"Fn",290],[4,"Dependencies",132],[8,"Default",291],[6,"SelectedDependencies",188],[8,"DependencyProvider",132],[3,"SemanticVersion",191],[3,"NumberVersion",191],[4,"Ordering",283],[4,"VersionParseError",191],[15,"u32"],[15,"str"],[13,"ErrorRetrievingDependencies",27],[13,"SelfDependency",27],[8,"Reporter",70],[3,"DefaultStringReporter",70],[8,"Version",191],[13,"NotThreeParts",262],[13,"ParseIntError",262]],"b":[[18,"impl-Display-for-PubGrubError%3CP,+VS%3E"],[19,"impl-Debug-for-PubGrubError%3CP,+VS%3E"],[40,"impl-Range%3CV%3E"],[41,"impl-VersionSet-for-Range%3CT%3E"],[42,"impl-VersionSet-for-Range%3CT%3E"],[43,"impl-Range%3CV%3E"],[44,"impl-Range%3CV%3E"],[45,"impl-VersionSet-for-Range%3CT%3E"],[47,"impl-Debug-for-Range%3CV%3E"],[48,"impl-Display-for-Range%3CV%3E"],[51,"impl-Range%3CV%3E"],[52,"impl-VersionSet-for-Range%3CT%3E"],[55,"impl-VersionSet-for-Range%3CT%3E"],[56,"impl-Range%3CV%3E"],[59,"impl-Range%3CV%3E"],[60,"impl-VersionSet-for-Range%3CT%3E"],[68,"impl-Range%3CV%3E"],[69,"impl-VersionSet-for-Range%3CT%3E"],[100,"impl-Display-for-External%3CP,+VS%3E"],[101,"impl-Debug-for-External%3CP,+VS%3E"],[179,"impl-Display-for-Term%3CVS%3E"],[180,"impl-Debug-for-Term%3CVS%3E"],[218,"impl-Display-for-SemanticVersion"],[219,"impl-Debug-for-SemanticVersion"],[220,"impl-Display-for-VersionParseError"],[221,"impl-Debug-for-VersionParseError"],[222,"impl-Debug-for-NumberVersion"],[223,"impl-Display-for-NumberVersion"],[224,"impl-From%3C(u32,+u32,+u32)%3E-for-SemanticVersion"],[226,"impl-From%3C%26SemanticVersion%3E-for-SemanticVersion"],[227,"impl-From%3C%26(u32,+u32,+u32)%3E-for-SemanticVersion"],[229,"impl-From%3Cu32%3E-for-NumberVersion"],[231,"impl-From%3C%26u32%3E-for-NumberVersion"],[232,"impl-From%3C%26NumberVersion%3E-for-NumberVersion"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};